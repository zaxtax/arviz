(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("41ca4985-a34b-499e-8c48-1de88ba77a8e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '41ca4985-a34b-499e-8c48-1de88ba77a8e' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"f15d66f1-1f80-41c7-ae76-0bf8fe34af10":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48060","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48061","type":"VBar"},{"attributes":{},"id":"48105","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"48058"},"glyph":{"id":"48059"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48061"},"nonselection_glyph":{"id":"48060"},"view":{"id":"48063"}},"id":"48062","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48058"}},"id":"48063","type":"CDSView"},{"attributes":{},"id":"48106","type":"AllLabels"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48077","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48064","type":"Span"},{"attributes":{},"id":"48113","type":"UnionRenderers"},{"attributes":{"ticks":[0,1,2,3]},"id":"48097","type":"FixedTicker"},{"attributes":{},"id":"48114","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48125"},"selection_policy":{"id":"48124"}},"id":"48069","type":"ColumnDataSource"},{"attributes":{"source":{"id":"48069"}},"id":"48074","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48070","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48082","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48069"},"glyph":{"id":"48070"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48072"},"nonselection_glyph":{"id":"48071"},"view":{"id":"48074"}},"id":"48073","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48072","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48071","type":"VBar"},{"attributes":{"source":{"id":"48076"}},"id":"48081","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48075","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48089","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48127"},"selection_policy":{"id":"48126"}},"id":"48076","type":"ColumnDataSource"},{"attributes":{},"id":"48119","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"48137"},{"id":"48135"}]},"id":"48138","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"48076"},"glyph":{"id":"48077"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48079"},"nonselection_glyph":{"id":"48078"},"view":{"id":"48081"}},"id":"48080","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48079","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48084","type":"VBar"},{"attributes":{},"id":"48120","type":"AllLabels"},{"attributes":{},"id":"48107","type":"UnionRenderers"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48078","type":"VBar"},{"attributes":{"source":{"id":"48083"}},"id":"48088","type":"CDSView"},{"attributes":{},"id":"48122","type":"BasicTickFormatter"},{"attributes":{},"id":"48108","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48096","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48129"},"selection_policy":{"id":"48128"}},"id":"48083","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48083"},"glyph":{"id":"48084"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48086"},"nonselection_glyph":{"id":"48085"},"view":{"id":"48088"}},"id":"48087","type":"GlyphRenderer"},{"attributes":{},"id":"48123","type":"AllLabels"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48086","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48091","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48085","type":"VBar"},{"attributes":{"source":{"id":"48090"}},"id":"48095","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48131"},"selection_policy":{"id":"48130"}},"id":"48090","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48090"},"glyph":{"id":"48091"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48093"},"nonselection_glyph":{"id":"48092"},"view":{"id":"48095"}},"id":"48094","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48093","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48092","type":"VBar"},{"attributes":{"toolbars":[{"id":"47994"},{"id":"48028"}],"tools":[{"id":"47984"},{"id":"47985"},{"id":"47986"},{"id":"47987"},{"id":"47988"},{"id":"47989"},{"id":"47990"},{"id":"47991"},{"id":"48018"},{"id":"48019"},{"id":"48020"},{"id":"48021"},{"id":"48022"},{"id":"48023"},{"id":"48024"},{"id":"48025"}]},"id":"48136","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"48136"},"toolbar_location":"above"},"id":"48137","type":"ToolbarBox"},{"attributes":{"below":[{"id":"47976"}],"center":[{"id":"47979"},{"id":"47983"},{"id":"48043"},{"id":"48050"},{"id":"48057"},{"id":"48064"}],"height":331,"left":[{"id":"47980"}],"output_backend":"webgl","renderers":[{"id":"48041"},{"id":"48048"},{"id":"48055"},{"id":"48062"}],"title":{"id":"48067"},"toolbar":{"id":"47994"},"toolbar_location":null,"width":496,"x_range":{"id":"47968"},"x_scale":{"id":"47972"},"y_range":{"id":"47970"},"y_scale":{"id":"47974"}},"id":"47967","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48109","type":"UnionRenderers"},{"attributes":{"below":[{"id":"48010"}],"center":[{"id":"48013"},{"id":"48017"},{"id":"48075"},{"id":"48082"},{"id":"48089"},{"id":"48096"}],"height":331,"left":[{"id":"48014"}],"output_backend":"webgl","renderers":[{"id":"48073"},{"id":"48080"},{"id":"48087"},{"id":"48094"}],"title":{"id":"48099"},"toolbar":{"id":"48028"},"toolbar_location":null,"width":496,"x_range":{"id":"47968"},"x_scale":{"id":"48006"},"y_range":{"id":"47970"},"y_scale":{"id":"48008"}},"id":"48003","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48110","type":"Selection"},{"attributes":{},"id":"48124","type":"UnionRenderers"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48105"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48106"},"ticker":{"id":"47977"}},"id":"47976","type":"LinearAxis"},{"attributes":{"children":[[{"id":"47967"},0,0],[{"id":"48003"},0,1]]},"id":"48135","type":"GridBox"},{"attributes":{},"id":"48125","type":"Selection"},{"attributes":{},"id":"47970","type":"DataRange1d"},{"attributes":{},"id":"47977","type":"BasicTicker"},{"attributes":{},"id":"47974","type":"LinearScale"},{"attributes":{},"id":"47968","type":"DataRange1d"},{"attributes":{"ticks":[0,1,2,3]},"id":"48065","type":"FixedTicker"},{"attributes":{},"id":"48111","type":"UnionRenderers"},{"attributes":{},"id":"48112","type":"Selection"},{"attributes":{"axis":{"id":"47976"},"coordinates":null,"group":null,"ticker":null},"id":"47979","type":"Grid"},{"attributes":{},"id":"48006","type":"LinearScale"},{"attributes":{},"id":"47972","type":"LinearScale"},{"attributes":{},"id":"48126","type":"UnionRenderers"},{"attributes":{},"id":"48127","type":"Selection"},{"attributes":{},"id":"48102","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"48018"},{"id":"48019"},{"id":"48020"},{"id":"48021"},{"id":"48022"},{"id":"48023"},{"id":"48024"},{"id":"48025"}]},"id":"48028","type":"Toolbar"},{"attributes":{},"id":"48103","type":"AllLabels"},{"attributes":{"callback":null},"id":"48025","type":"HoverTool"},{"attributes":{"axis":{"id":"48014"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48017","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48099","type":"Title"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48108"},"selection_policy":{"id":"48107"}},"id":"48037","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"48026"}},"id":"48020","type":"BoxZoomTool"},{"attributes":{},"id":"48019","type":"PanTool"},{"attributes":{},"id":"47989","type":"UndoTool"},{"attributes":{},"id":"48018","type":"ResetTool"},{"attributes":{},"id":"48024","type":"SaveTool"},{"attributes":{},"id":"48021","type":"WheelZoomTool"},{"attributes":{"tools":[{"id":"47984"},{"id":"47985"},{"id":"47986"},{"id":"47987"},{"id":"47988"},{"id":"47989"},{"id":"47990"},{"id":"47991"}]},"id":"47994","type":"Toolbar"},{"attributes":{"overlay":{"id":"48027"}},"id":"48022","type":"LassoSelectTool"},{"attributes":{},"id":"48023","type":"UndoTool"},{"attributes":{},"id":"48128","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48050","type":"Span"},{"attributes":{},"id":"48129","type":"Selection"},{"attributes":{"overlay":{"id":"47992"}},"id":"47986","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48026","type":"BoxAnnotation"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48102"},"group":null,"major_label_policy":{"id":"48103"},"ticker":{"id":"48065"}},"id":"47980","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48057","type":"Span"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48038","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48067","type":"Title"},{"attributes":{},"id":"47984","type":"ResetTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48027","type":"PolyAnnotation"},{"attributes":{},"id":"47990","type":"SaveTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48047","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48044"},"glyph":{"id":"48045"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48047"},"nonselection_glyph":{"id":"48046"},"view":{"id":"48049"}},"id":"48048","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"48010"},"coordinates":null,"group":null,"ticker":null},"id":"48013","type":"Grid"},{"attributes":{},"id":"48130","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"47992","type":"BoxAnnotation"},{"attributes":{},"id":"48131","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48046","type":"VBar"},{"attributes":{"axis":{"id":"47980"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47983","type":"Grid"},{"attributes":{"overlay":{"id":"47993"}},"id":"47988","type":"LassoSelectTool"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48053","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48052","type":"VBar"},{"attributes":{"callback":null},"id":"47991","type":"HoverTool"},{"attributes":{},"id":"47987","type":"WheelZoomTool"},{"attributes":{},"id":"47985","type":"PanTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48114"},"selection_policy":{"id":"48113"}},"id":"48058","type":"ColumnDataSource"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48112"},"selection_policy":{"id":"48111"}},"id":"48051","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48051"},"glyph":{"id":"48052"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48054"},"nonselection_glyph":{"id":"48053"},"view":{"id":"48056"}},"id":"48055","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48051"}},"id":"48056","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48043","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48122"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48123"},"ticker":{"id":"48011"}},"id":"48010","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48110"},"selection_policy":{"id":"48109"}},"id":"48044","type":"ColumnDataSource"},{"attributes":{},"id":"48011","type":"BasicTicker"},{"attributes":{"source":{"id":"48044"}},"id":"48049","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48039","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48040","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48037"},"glyph":{"id":"48038"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48040"},"nonselection_glyph":{"id":"48039"},"view":{"id":"48042"}},"id":"48041","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48037"}},"id":"48042","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48054","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48059","type":"VBar"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48119"},"group":null,"major_label_policy":{"id":"48120"},"ticker":{"id":"48097"}},"id":"48014","type":"LinearAxis"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48045","type":"VBar"},{"attributes":{},"id":"48008","type":"LinearScale"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"47993","type":"PolyAnnotation"}],"root_ids":["48138"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"f15d66f1-1f80-41c7-ae76-0bf8fe34af10","root_ids":["48138"],"roots":{"48138":"41ca4985-a34b-499e-8c48-1de88ba77a8e"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();