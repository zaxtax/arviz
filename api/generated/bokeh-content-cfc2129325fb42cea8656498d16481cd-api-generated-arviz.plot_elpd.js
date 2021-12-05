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
    
      
      
    
      const element = document.getElementById("b1b041a0-749a-420c-ab09-d8625a99f46a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b1b041a0-749a-420c-ab09-d8625a99f46a' but no matching script tag was found.")
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
                    
                  const docs_json = '{"a3d19d96-6dd4-4c68-bc5f-cf735a19bdf0":{"defs":[],"roots":{"references":[{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AlPbM2OqMvwDAeMOrrEA/ABRdkUAak7+A2X/x9IekPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17305"},"selection_policy":{"id":"17304"}},"id":"17292","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"17255"},0,0]]},"id":"17309","type":"GridBox"},{"attributes":{"overlay":{"id":"17280"}},"id":"17274","type":"BoxZoomTool"},{"attributes":{},"id":"17269","type":"BasicTicker"},{"attributes":{},"id":"17278","type":"SaveTool"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17295","type":"Title"},{"attributes":{"coordinates":null,"formatter":{"id":"17302"},"group":null,"major_label_policy":{"id":"17303"},"ticker":{"id":"17265"}},"id":"17264","type":"LinearAxis"},{"attributes":{},"id":"17260","type":"LinearScale"},{"attributes":{},"id":"17258","type":"DataRange1d"},{"attributes":{},"id":"17262","type":"LinearScale"},{"attributes":{"axis":{"id":"17268"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17271","type":"Grid"},{"attributes":{},"id":"17302","type":"BasicTickFormatter"},{"attributes":{},"id":"17299","type":"BasicTickFormatter"},{"attributes":{},"id":"17275","type":"WheelZoomTool"},{"attributes":{},"id":"17273","type":"PanTool"},{"attributes":{"coordinates":null,"data_source":{"id":"17292"},"glyph":{"id":"17291"},"group":null,"hover_glyph":null,"view":{"id":"17294"}},"id":"17293","type":"GlyphRenderer"},{"attributes":{},"id":"17305","type":"Selection"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17291","type":"Scatter"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17299"},"group":null,"major_label_policy":{"id":"17300"},"ticker":{"id":"17269"}},"id":"17268","type":"LinearAxis"},{"attributes":{},"id":"17272","type":"ResetTool"},{"attributes":{"callback":null},"id":"17279","type":"HoverTool"},{"attributes":{"children":[{"id":"17311"},{"id":"17309"}]},"id":"17312","type":"Column"},{"attributes":{"axis":{"id":"17264"},"coordinates":null,"group":null,"ticker":null},"id":"17267","type":"Grid"},{"attributes":{},"id":"17303","type":"AllLabels"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17281","type":"PolyAnnotation"},{"attributes":{"source":{"id":"17292"}},"id":"17294","type":"CDSView"},{"attributes":{},"id":"17277","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"17282"}],"tools":[{"id":"17272"},{"id":"17273"},{"id":"17274"},{"id":"17275"},{"id":"17276"},{"id":"17277"},{"id":"17278"},{"id":"17279"}]},"id":"17310","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"17281"}},"id":"17276","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"17310"},"toolbar_location":"above"},"id":"17311","type":"ToolbarBox"},{"attributes":{},"id":"17300","type":"AllLabels"},{"attributes":{},"id":"17265","type":"BasicTicker"},{"attributes":{"tools":[{"id":"17272"},{"id":"17273"},{"id":"17274"},{"id":"17275"},{"id":"17276"},{"id":"17277"},{"id":"17278"},{"id":"17279"}]},"id":"17282","type":"Toolbar"},{"attributes":{},"id":"17256","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17280","type":"BoxAnnotation"},{"attributes":{},"id":"17304","type":"UnionRenderers"},{"attributes":{"below":[{"id":"17264"}],"center":[{"id":"17267"},{"id":"17271"}],"height":288,"left":[{"id":"17268"}],"output_backend":"webgl","renderers":[{"id":"17293"}],"title":{"id":"17295"},"toolbar":{"id":"17282"},"toolbar_location":null,"width":432,"x_range":{"id":"17256"},"x_scale":{"id":"17260"},"y_range":{"id":"17258"},"y_scale":{"id":"17262"}},"id":"17255","subtype":"Figure","type":"Plot"}],"root_ids":["17312"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"a3d19d96-6dd4-4c68-bc5f-cf735a19bdf0","root_ids":["17312"],"roots":{"17312":"b1b041a0-749a-420c-ab09-d8625a99f46a"}}];
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