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
    
      
      
    
      const element = document.getElementById("a8428b02-e49f-4ca5-8c89-5cc87486997b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a8428b02-e49f-4ca5-8c89-5cc87486997b' but no matching script tag was found.")
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
                    
                  const docs_json = '{"bfa12b55-b68c-452a-9d1c-72176eb7f477":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20468","type":"UnionRenderers"},{"attributes":{},"id":"20471","type":"Selection"},{"attributes":{},"id":"20403","type":"LinearScale"},{"attributes":{},"id":"20459","type":"BasicTickFormatter"},{"attributes":{},"id":"20419","type":"SaveTool"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20441","type":"Line"},{"attributes":{"callback":null},"id":"20420","type":"HoverTool"},{"attributes":{"axis":{"id":"20405"},"coordinates":null,"group":null,"ticker":null},"id":"20408","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"20450"},"glyph":{"id":"20451"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20453"},"nonselection_glyph":{"id":"20452"},"view":{"id":"20455"}},"id":"20454","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20467"},"selection_policy":{"id":"20466"}},"id":"20438","type":"ColumnDataSource"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20433","type":"Line"},{"attributes":{},"id":"20466","type":"UnionRenderers"},{"attributes":{"below":[{"id":"20405"}],"center":[{"id":"20408"},{"id":"20412"}],"height":360,"left":[{"id":"20409"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20436"},{"id":"20442"},{"id":"20448"},{"id":"20454"}],"title":{"id":"20456"},"toolbar":{"id":"20423"},"toolbar_location":null,"width":720,"x_range":{"id":"20397"},"x_scale":{"id":"20401"},"y_range":{"id":"20399"},"y_scale":{"id":"20403"}},"id":"20396","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"20421"}},"id":"20415","type":"BoxZoomTool"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20439","type":"Line"},{"attributes":{"source":{"id":"20444"}},"id":"20449","type":"CDSView"},{"attributes":{},"id":"20462","type":"BasicTickFormatter"},{"attributes":{},"id":"20469","type":"Selection"},{"attributes":{},"id":"20418","type":"UndoTool"},{"attributes":{},"id":"20397","type":"DataRange1d"},{"attributes":{},"id":"20470","type":"UnionRenderers"},{"attributes":{},"id":"20413","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20438"},"glyph":{"id":"20439"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20441"},"nonselection_glyph":{"id":"20440"},"view":{"id":"20443"}},"id":"20442","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"20396"},0,0]]},"id":"20475","type":"GridBox"},{"attributes":{"data":{},"selected":{"id":"20469"},"selection_policy":{"id":"20468"}},"id":"20444","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20422","type":"PolyAnnotation"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20465"},"selection_policy":{"id":"20464"}},"id":"20432","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20440","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20446","type":"Circle"},{"attributes":{},"id":"20410","type":"BasicTicker"},{"attributes":{},"id":"20460","type":"AllLabels"},{"attributes":{},"id":"20414","type":"PanTool"},{"attributes":{"coordinates":null,"formatter":{"id":"20462"},"group":null,"major_label_policy":{"id":"20463"},"ticker":{"id":"20406"}},"id":"20405","type":"LinearAxis"},{"attributes":{},"id":"20401","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null},"id":"20456","type":"Title"},{"attributes":{"overlay":{"id":"20422"}},"id":"20417","type":"LassoSelectTool"},{"attributes":{"toolbars":[{"id":"20423"}],"tools":[{"id":"20413"},{"id":"20414"},{"id":"20415"},{"id":"20416"},{"id":"20417"},{"id":"20418"},{"id":"20419"},{"id":"20420"}]},"id":"20476","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20421","type":"BoxAnnotation"},{"attributes":{},"id":"20406","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20453","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20471"},"selection_policy":{"id":"20470"}},"id":"20450","type":"ColumnDataSource"},{"attributes":{},"id":"20467","type":"Selection"},{"attributes":{"toolbar":{"id":"20476"},"toolbar_location":"above"},"id":"20477","type":"ToolbarBox"},{"attributes":{"tools":[{"id":"20413"},{"id":"20414"},{"id":"20415"},{"id":"20416"},{"id":"20417"},{"id":"20418"},{"id":"20419"},{"id":"20420"}]},"id":"20423","type":"Toolbar"},{"attributes":{"children":[{"id":"20477"},{"id":"20475"}]},"id":"20478","type":"Column"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20434","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"20432"},"glyph":{"id":"20433"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20435"},"nonselection_glyph":{"id":"20434"},"view":{"id":"20437"}},"id":"20436","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20438"}},"id":"20443","type":"CDSView"},{"attributes":{"source":{"id":"20450"}},"id":"20455","type":"CDSView"},{"attributes":{},"id":"20416","type":"WheelZoomTool"},{"attributes":{},"id":"20399","type":"DataRange1d"},{"attributes":{"axis":{"id":"20409"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20412","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20452","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20447","type":"Circle"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20451","type":"Circle"},{"attributes":{},"id":"20465","type":"Selection"},{"attributes":{"source":{"id":"20432"}},"id":"20437","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20445","type":"Circle"},{"attributes":{},"id":"20463","type":"AllLabels"},{"attributes":{},"id":"20464","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"20444"},"glyph":{"id":"20445"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20447"},"nonselection_glyph":{"id":"20446"},"view":{"id":"20449"}},"id":"20448","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"20459"},"group":null,"major_label_policy":{"id":"20460"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20410"}},"id":"20409","type":"LinearAxis"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20435","type":"Line"}],"root_ids":["20478"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"bfa12b55-b68c-452a-9d1c-72176eb7f477","root_ids":["20478"],"roots":{"20478":"a8428b02-e49f-4ca5-8c89-5cc87486997b"}}];
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