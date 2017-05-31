﻿directPortalApp.controller("timelineController", function ($scope, serviceWrapper) {
    function init() {

       
        
        var $ = go.GraphObject.make;  // for conciseness in defining templates

        myDiagram = $(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
            {
                layout: $(TimelineLayout),
                isTreePathToChildren: false,  // arrows from children (events) to the parent (timeline bar)
                initialContentAlignment: go.Spot.Center,  // center the content
            });

        myDiagram.nodeTemplate =
            $(go.Node, "Table",
                { locationSpot: go.Spot.Center, movable: false },
                $(go.Panel, "Auto",
                    $(go.Shape, "RoundedRectangle",
                        { fill: "#252526", stroke: "#519ABA", strokeWidth: 3 }
                    ),
                    $(go.Panel, "Table",
                        $(go.TextBlock,
                            {
                                row: 0,
                                stroke: "#CCCCCC",
                                wrap: go.TextBlock.WrapFit,
                                font: "bold 12pt sans-serif",
                                textAlign: "center", margin: 4
                            },
                            new go.Binding("text", "event")
                        ),
                        $(go.TextBlock,
                            {
                                row: 1,
                                stroke: "#A074C4",
                                textAlign: "center", margin: 4
                            },
                            new go.Binding("text", "date", function (d) { return d.toLocaleDateString(); })
                        )
                    )
                )
            );

        myDiagram.nodeTemplateMap.add("Line",
            $(go.Node, "Graduated",
                {
                    movable: false, copyable: false,
                    resizable: true, resizeObjectName: "MAIN",
                    background: "transparent",
                    graduatedMin: 0,
                    graduatedMax: 365,
                    graduatedTickUnit: 1,
                    resizeAdornmentTemplate:  // only resizing at right end
                    $(go.Adornment, "Spot",
                        $(go.Placeholder),
                        $(go.Shape, { alignment: go.Spot.Right, cursor: "e-resize", desiredSize: new go.Size(4, 16), fill: "lightblue", stroke: "deepskyblue" })
                    )
                },
                new go.Binding("graduatedMax", "", timelineDays),
                $(go.Shape, "LineH",
                    { name: "MAIN", stroke: "#519ABA", height: 1, strokeWidth: 3 },
                    new go.Binding("width", "length").makeTwoWay()
                ),
                $(go.Shape, { geometryString: "M0 0 V10", interval: 7, stroke: "#519ABA", strokeWidth: 2 }),
                $(go.TextBlock,
                    {
                        font: "10pt sans-serif",
                        stroke: "#CCCCCC",
                        interval: 14,
                        alignmentFocus: go.Spot.MiddleRight,
                        segmentOrientation: go.Link.OrientMinus90,
                        segmentOffset: new go.Point(0, 12),
                        graduatedFunction: valueToDate
                    },
                    new go.Binding("interval", "length", calculateLabelInterval)
                )
            )
        );

        function calculateLabelInterval(len) {
            if (len >= 800) return 7;
            else if (400 <= len && len < 800) return 14;
            else if (200 <= len && len < 400) return 21;
            else if (140 <= len && len < 200) return 28;
            else if (110 <= len && len < 140) return 35;
            else return 365;
        }

        // The template for the link connecting the event node with the timeline bar node:
        myDiagram.linkTemplate =
            $(BarLink,  // defined below
                { toShortLength: 2, layerName: "Background" },
                $(go.Shape, { stroke: "#E37933", strokeWidth: 2 })
            );

        // Setup the model data -- an object describing the timeline bar node
        // and an object for each event node:
        var data = [
            { // this defines the actual time "Line" bar
                key: "timeline", category: "Line",
                lineSpacing: 30,  // distance between timeline and event nodes
                length: 700,  // the width of the timeline
                start: new Date("1 Jan 2016"),
                end: new Date("31 Dec 2016")
            },

            // the rest are just "events" --
            // you can add as much information as you want on each and extend the
            // default nodeTemplate to show as much information as you want
            { event: "New Year's Day", date: new Date("1 Jan 2016") },
            { event: "MLK Jr. Day", date: new Date("18 Jan 2016") },
            { event: "Presidents Day", date: new Date("15 Feb 2016") },
            { event: "Memorial Day", date: new Date("30 May 2016") },
            { event: "Independence Day", date: new Date("4 Jul 2016") },
            { event: "Labor Day", date: new Date("5 Sep 2016") },
            { event: "Columbus Day", date: new Date("10 Oct 2016") },
            { event: "Veterans Day", date: new Date("11 Nov 2016") },
            { event: "Thanksgiving", date: new Date("24 Nov 2016") },
            { event: "Christmas", date: new Date("25 Dec 2016") }
        ];

        // prepare the model by adding links to the Line
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            if (d.key !== "timeline") d.parent = "timeline";
        }

        myDiagram.model = $(go.TreeModel, { nodeDataArray: data });
    }

    function timelineDays() {
        var timeline = myDiagram.model.findNodeDataForKey("timeline");
        var startDate = timeline.start;
        var endDate = timeline.end;

        function treatAsUTC(date) {
            var result = new Date(date);
            result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
            return result;
        }

        function daysBetween(startDate, endDate) {
            var millisecondsPerDay = 24 * 60 * 60 * 1000;
            return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
        }
        return daysBetween(startDate, endDate);
    }

    // This custom Layout locates the timeline bar at (0,0)
    // and alternates the event Nodes above and below the bar at
    // the X-coordinate locations determined by their data.date values.
    function TimelineLayout() {
        go.Layout.call(this);
    };
    go.Diagram.inherit(TimelineLayout, go.Layout);

    TimelineLayout.prototype.doLayout = function (coll) {
        var diagram = this.diagram;
        if (diagram === null) return;
        coll = this.collectParts(coll);
        diagram.startTransaction("TimelineLayout");

        var line = null;
        var parts = [];
        var it = coll.iterator;
        while (it.next()) {
            var part = it.value;
            if (part instanceof go.Link) continue;
            if (part.category === "Line") { line = part; continue; }
            parts.push(part);
            var x = part.data.date;
            if (x === undefined) { x = new Date(); part.data.date = x; }
        }
        if (!line) throw Error("No node of category 'Line' for TimelineLayout");

        line.location = new go.Point(0, 0);

        // lay out the events above the timeline
        if (parts.length > 0) {
            // determine the offset from the main shape to the timeline's boundaries
            var main = line.findMainElement();
            var sw = main.strokeWidth;
            var mainOffX = main.actualBounds.x;
            var mainOffY = main.actualBounds.y;
            // spacing is between the Line and the closest Nodes, defaults to 30
            var spacing = line.data.lineSpacing;
            if (!spacing) spacing = 30;
            for (var i = 0; i < parts.length; i++) {
                var part = parts[i];
                var bnds = part.actualBounds;
                var dt = part.data.date;
                var val = dateToValue(dt);
                var pt = line.graduatedPointForValue(val);
                var tempLoc = new go.Point(pt.x, pt.y - bnds.height / 2 - spacing);
                // check if this node will overlap with previously placed events, and offset if needed
                for (var j = 0; j < i; j++) {
                    var partRect = new go.Rect(tempLoc.x, tempLoc.y, bnds.width, bnds.height);
                    var otherLoc = parts[j].location;
                    var otherBnds = parts[j].actualBounds;
                    var otherRect = new go.Rect(otherLoc.x, otherLoc.y, otherBnds.width, otherBnds.height);
                    if (partRect.intersectsRect(otherRect)) {
                        tempLoc.offset(0, -otherBnds.height - 10);
                        j = 0; // now that we have a new location, we need to recheck in case we overlap with an event we didn't overlap before
                    }
                }
                part.location = tempLoc;
            }
        }

        diagram.commitTransaction("TimelineLayout");
    };
    // end TimelineLayout class

    // This custom Link class was adapted from several of the samples
    function BarLink() {
        go.Link.call(this);
    }
    go.Diagram.inherit(BarLink, go.Link);

    BarLink.prototype.getLinkPoint = function (node, port, spot, from, ortho, othernode, otherport) {
        var r = new go.Rect(port.getDocumentPoint(go.Spot.TopLeft),
            port.getDocumentPoint(go.Spot.BottomRight));
        var op = otherport.getDocumentPoint(go.Spot.Center);
        var main = node.category === "Line" ? node.findMainElement() : othernode.findMainElement();
        var mainOffY = main.actualBounds.y;
        var y = r.top;
        if (node.category === "Line") {
            y += mainOffY;
            if (op.x < r.left) return new go.Point(r.left, y);
            if (op.x > r.right) return new go.Point(r.right, y);
            return new go.Point(op.x, y);
        } else {
            return new go.Point(r.centerX, r.bottom);
        }
    };

    BarLink.prototype.getLinkDirection = function (node, port, linkpoint, spot, from, ortho, othernode, otherport) {
        return 270;
    };
    // end BarLink class

    function valueToDate(n) {
        var timeline = myDiagram.model.findNodeDataForKey("timeline");
        var startDate = timeline.start;
        var startDateMs = startDate.getTime() + startDate.getTimezoneOffset() * 60000;
        var msPerDay = 24 * 60 * 60 * 1000;
        var date = new Date(startDateMs + n * msPerDay);
        return date.toLocaleDateString();
    }

    function dateToValue(d) {
        var timeline = myDiagram.model.findNodeDataForKey("timeline");
        var startDate = timeline.start;
        var startDateMs = startDate.getTime() + startDate.getTimezoneOffset() * 60000;
        var dateInMs = d.getTime() + d.getTimezoneOffset() * 60000;
        var msSinceStart = dateInMs - startDateMs;
        var msPerDay = 24 * 60 * 60 * 1000;
        return msSinceStart / msPerDay;
    }

    init();
});