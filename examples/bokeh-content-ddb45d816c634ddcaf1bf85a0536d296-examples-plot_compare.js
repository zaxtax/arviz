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
    
      
      
    
      const element = document.getElementById("1f371a3f-ec41-4f74-b5b4-aa16bf666552");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1f371a3f-ec41-4f74-b5b4-aa16bf666552' but no matching script tag was found.")
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
                    
                  const docs_json = '{"95430e19-b7ee-4436-bb94-a2ac320848a9":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18068","type":"PanTool"},{"attributes":{},"id":"18124","type":"BasicTickFormatter"},{"attributes":{},"id":"18135","type":"Selection"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687557665243812},"id":"18118","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"F1Z2xwOwPsBFCx7Af88+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18131"},"selection_policy":{"id":"18130"}},"id":"18100","type":"ColumnDataSource"},{"attributes":{},"id":"18127","type":"Selection"},{"attributes":{},"id":"18072","type":"UndoTool"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18097","type":"MultiLine"},{"attributes":{"coordinates":null,"formatter":{"id":"18121"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18122"},"ticker":{"id":"18086"}},"id":"18063","type":"LinearAxis"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18107","type":"MultiLine"},{"attributes":{"source":{"id":"18088"}},"id":"18093","type":"CDSView"},{"attributes":{"source":{"id":"18106"}},"id":"18111","type":"CDSView"},{"attributes":{"source":{"id":"18100"}},"id":"18105","type":"CDSView"},{"attributes":{},"id":"18073","type":"SaveTool"},{"attributes":{},"id":"18057","type":"LinearScale"},{"attributes":{},"id":"18121","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"18140"},"toolbar_location":"above"},"id":"18141","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18103","type":"Circle"},{"attributes":{"axis":{"id":"18063"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18066","type":"Grid"},{"attributes":{},"id":"18055","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18109","type":"MultiLine"},{"attributes":{"children":[{"id":"18141"},{"id":"18139"}]},"id":"18142","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18102","type":"Circle"},{"attributes":{},"id":"18125","type":"AllLabels"},{"attributes":{"tools":[{"id":"18067"},{"id":"18068"},{"id":"18069"},{"id":"18070"},{"id":"18071"},{"id":"18072"},{"id":"18073"},{"id":"18074"}]},"id":"18077","type":"Toolbar"},{"attributes":{},"id":"18132","type":"UnionRenderers"},{"attributes":{},"id":"18128","type":"UnionRenderers"},{"attributes":{"source":{"id":"18094"}},"id":"18099","type":"CDSView"},{"attributes":{"children":[[{"id":"18050"},0,0]]},"id":"18139","type":"GridBox"},{"attributes":{"coordinates":null,"data_source":{"id":"18088"},"glyph":{"id":"18089"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18091"},"nonselection_glyph":{"id":"18090"},"view":{"id":"18093"}},"id":"18092","type":"GlyphRenderer"},{"attributes":{},"id":"18051","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18096","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"RQsewH/PPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18127"},"selection_policy":{"id":"18126"}},"id":"18088","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18101","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"18112"},"glyph":{"id":"18113"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18115"},"nonselection_glyph":{"id":"18114"},"view":{"id":"18117"}},"id":"18116","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18114","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18115","type":"Circle"},{"attributes":{},"id":"18131","type":"Selection"},{"attributes":{"overlay":{"id":"18076"}},"id":"18071","type":"LassoSelectTool"},{"attributes":{},"id":"18067","type":"ResetTool"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18113","type":"Circle"},{"attributes":{},"id":"18122","type":"AllLabels"},{"attributes":{},"id":"18060","type":"BasicTicker"},{"attributes":{},"id":"18070","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"18094"},"glyph":{"id":"18095"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18097"},"nonselection_glyph":{"id":"18096"},"view":{"id":"18099"}},"id":"18098","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"18077"}],"tools":[{"id":"18067"},{"id":"18068"},{"id":"18069"},{"id":"18070"},{"id":"18071"},{"id":"18072"},{"id":"18073"},{"id":"18074"}]},"id":"18140","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"18100"},"glyph":{"id":"18101"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18103"},"nonselection_glyph":{"id":"18102"},"view":{"id":"18105"}},"id":"18104","type":"GlyphRenderer"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18086","type":"FixedTicker"},{"attributes":{"source":{"id":"18112"}},"id":"18117","type":"CDSView"},{"attributes":{},"id":"18133","type":"Selection"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18095","type":"MultiLine"},{"attributes":{"callback":null},"id":"18074","type":"HoverTool"},{"attributes":{"coordinates":null,"group":null},"id":"18119","type":"Title"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18124"},"group":null,"major_label_policy":{"id":"18125"},"ticker":{"id":"18060"}},"id":"18059","type":"LinearAxis"},{"attributes":{},"id":"18130","type":"UnionRenderers"},{"attributes":{},"id":"18126","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18089","type":"Scatter"},{"attributes":{"coordinates":null,"data_source":{"id":"18106"},"glyph":{"id":"18107"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18109"},"nonselection_glyph":{"id":"18108"},"view":{"id":"18111"}},"id":"18110","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"18059"},"coordinates":null,"group":null,"ticker":null},"id":"18062","type":"Grid"},{"attributes":{"data":{"xs":[[-30.89650239461682,-30.724583739978986]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18129"},"selection_policy":{"id":"18128"}},"id":"18094","type":"ColumnDataSource"},{"attributes":{"end":0.5,"start":-1.5},"id":"18053","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18075","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18090","type":"Scatter"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18135"},"selection_policy":{"id":"18134"}},"id":"18112","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"18075"}},"id":"18069","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18076","type":"PolyAnnotation"},{"attributes":{"data":{"xs":[[-32.05285582175997,-29.322259508727658],[-32.23767500713157,-29.383411127464235]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18133"},"selection_policy":{"id":"18132"}},"id":"18106","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18091","type":"Scatter"},{"attributes":{},"id":"18129","type":"Selection"},{"attributes":{},"id":"18134","type":"UnionRenderers"},{"attributes":{"below":[{"id":"18059"}],"center":[{"id":"18062"},{"id":"18066"}],"height":500,"left":[{"id":"18063"}],"output_backend":"webgl","renderers":[{"id":"18092"},{"id":"18098"},{"id":"18104"},{"id":"18110"},{"id":"18116"},{"id":"18118"}],"title":{"id":"18119"},"toolbar":{"id":"18077"},"toolbar_location":null,"width":500,"x_range":{"id":"18051"},"x_scale":{"id":"18055"},"y_range":{"id":"18053"},"y_scale":{"id":"18057"}},"id":"18050","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18108","type":"MultiLine"}],"root_ids":["18142"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"95430e19-b7ee-4436-bb94-a2ac320848a9","root_ids":["18142"],"roots":{"18142":"1f371a3f-ec41-4f74-b5b4-aa16bf666552"}}];
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