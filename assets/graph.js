
    // Load the CSV file and render the initial graph
    d3.csv("test.csv").then(function(data) {
        renderGraph(data, "bar"); // Render bar graph initially
      }).catch(function(error) {
        console.log(error);
      });
      
      // Listen for changes in the dropdown menu
      var dropdown = document.getElementById("graph-type");
      dropdown.addEventListener("change", function() {
        var selectedGraphType = this.value;
        d3.csv("data.csv").then(function(data) {
          renderGraph(data, selectedGraphType);
        }).catch(function(error) {
          console.log(error);
        });
      });
      
      // Function to render the graph based on the selected graph type
      function renderGraph(data, graphType) {
        // Clear the previous graph
        d3.select("#graph-container").html("");
        
        var margin = { top: 20, right: 20, bottom: 30, left: 40 };
        var width = 600 - margin.left - margin.right;
        var height = 400 - margin.top - margin.bottom;
        
        // Create SVG element
        var svg = d3.select("#graph-container")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
        // Perform data manipulation and visualization based on the graph type
        if (graphType === "bar") {
          // Bar graph implementation
          // ...
        } else if (graphType === "line") {
          // Line graph implementation
          // ...
        } else if (graphType === "scatter") {
          // Scatterplot implementation
          // ...
        }
      }