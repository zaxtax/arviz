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
    
      
      
    
      const element = document.getElementById("d20f7eed-3931-4eff-83ae-f4d6fec25068");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd20f7eed-3931-4eff-83ae-f4d6fec25068' but no matching script tag was found.")
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
                    
                  const docs_json = '{"36d042f5-c833-4112-bd23-2643e1683ff4":{"defs":[],"roots":{"references":[{"attributes":{},"id":"41713","type":"BasicTicker"},{"attributes":{"axis":{"id":"41712"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41715","type":"Grid"},{"attributes":{},"id":"41721","type":"UndoTool"},{"attributes":{},"id":"41822","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"41724"}},"id":"41718","type":"BoxZoomTool"},{"attributes":{},"id":"41717","type":"PanTool"},{"attributes":{},"id":"41716","type":"ResetTool"},{"attributes":{},"id":"41823","type":"Selection"},{"attributes":{"axis":{"id":"41708"},"coordinates":null,"group":null,"ticker":null},"id":"41711","type":"Grid"},{"attributes":{},"id":"41722","type":"SaveTool"},{"attributes":{},"id":"41719","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41761","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"41725"}},"id":"41720","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41793","type":"Span"},{"attributes":{},"id":"41736","type":"DataRange1d"},{"attributes":{"callback":null},"id":"41723","type":"HoverTool"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41817"},"group":null,"major_label_policy":{"id":"41818"},"ticker":{"id":"41749"}},"id":"41748","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"41771"},"glyph":{"id":"41772"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41774"},"nonselection_glyph":{"id":"41773"},"view":{"id":"41776"}},"id":"41775","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41724","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41760","type":"BoxAnnotation"},{"attributes":{"source":{"id":"41771"}},"id":"41776","type":"CDSView"},{"attributes":{},"id":"41803","type":"BasicTickFormatter"},{"attributes":{},"id":"41704","type":"LinearScale"},{"attributes":{},"id":"41804","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41778","type":"Span"},{"attributes":{},"id":"41806","type":"BasicTickFormatter"},{"attributes":{},"id":"41824","type":"UnionRenderers"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41725","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41792","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41811"},"selection_policy":{"id":"41810"}},"id":"41781","type":"ColumnDataSource"},{"attributes":{},"id":"41825","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41774","type":"Circle"},{"attributes":{},"id":"41807","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41779","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41773","type":"Circle"},{"attributes":{"children":[[{"id":"41699"},0,0],[{"id":"41735"},0,1]]},"id":"41829","type":"GridBox"},{"attributes":{},"id":"41753","type":"PanTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41780","type":"Scatter"},{"attributes":{"overlay":{"id":"41760"}},"id":"41754","type":"BoxZoomTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41825"},"selection_policy":{"id":"41824"}},"id":"41796","type":"ColumnDataSource"},{"attributes":{},"id":"41740","type":"LinearScale"},{"attributes":{},"id":"41758","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41789","type":"Circle"},{"attributes":{},"id":"41808","type":"UnionRenderers"},{"attributes":{},"id":"41755","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41787","type":"Circle"},{"attributes":{},"id":"41752","type":"ResetTool"},{"attributes":{"source":{"id":"41786"}},"id":"41791","type":"CDSView"},{"attributes":{},"id":"41809","type":"Selection"},{"attributes":{"overlay":{"id":"41761"}},"id":"41756","type":"LassoSelectTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41795","type":"Scatter"},{"attributes":{"coordinates":null,"data_source":{"id":"41796"},"glyph":{"id":"41795"},"group":null,"hover_glyph":null,"view":{"id":"41798"}},"id":"41797","type":"GlyphRenderer"},{"attributes":{},"id":"41757","type":"UndoTool"},{"attributes":{"tools":[{"id":"41752"},{"id":"41753"},{"id":"41754"},{"id":"41755"},{"id":"41756"},{"id":"41757"},{"id":"41758"},{"id":"41759"}]},"id":"41762","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41823"},"selection_policy":{"id":"41822"}},"id":"41786","type":"ColumnDataSource"},{"attributes":{},"id":"41749","type":"BasicTicker"},{"attributes":{"axis":{"id":"41748"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41751","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41784","type":"Title"},{"attributes":{},"id":"41700","type":"DataRange1d"},{"attributes":{"callback":null},"id":"41759","type":"HoverTool"},{"attributes":{"end":1,"start":-0.05},"id":"41702","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"41786"},"glyph":{"id":"41787"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41789"},"nonselection_glyph":{"id":"41788"},"view":{"id":"41791"}},"id":"41790","type":"GlyphRenderer"},{"attributes":{"end":1,"start":-0.05},"id":"41738","type":"DataRange1d"},{"attributes":{},"id":"41810","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41788","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"41781"},"glyph":{"id":"41780"},"group":null,"hover_glyph":null,"view":{"id":"41783"}},"id":"41782","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41794","type":"Span"},{"attributes":{},"id":"41811","type":"Selection"},{"attributes":{"below":[{"id":"41708"}],"center":[{"id":"41711"},{"id":"41715"}],"height":500,"left":[{"id":"41712"}],"output_backend":"webgl","renderers":[{"id":"41775"},{"id":"41777"},{"id":"41778"},{"id":"41779"},{"id":"41782"}],"title":{"id":"41784"},"toolbar":{"id":"41726"},"toolbar_location":null,"width":500,"x_range":{"id":"41700"},"x_scale":{"id":"41704"},"y_range":{"id":"41702"},"y_scale":{"id":"41706"}},"id":"41699","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41817","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41777","type":"Span"},{"attributes":{"toolbar":{"id":"41830"},"toolbar_location":"above"},"id":"41831","type":"ToolbarBox"},{"attributes":{"axis":{"id":"41744"},"coordinates":null,"group":null,"ticker":null},"id":"41747","type":"Grid"},{"attributes":{},"id":"41818","type":"AllLabels"},{"attributes":{},"id":"41745","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41772","type":"Circle"},{"attributes":{},"id":"41742","type":"LinearScale"},{"attributes":{},"id":"41820","type":"BasicTickFormatter"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41803"},"group":null,"major_label_policy":{"id":"41804"},"ticker":{"id":"41713"}},"id":"41712","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"41726"},{"id":"41762"}],"tools":[{"id":"41716"},{"id":"41717"},{"id":"41718"},{"id":"41719"},{"id":"41720"},{"id":"41721"},{"id":"41722"},{"id":"41723"},{"id":"41752"},{"id":"41753"},{"id":"41754"},{"id":"41755"},{"id":"41756"},{"id":"41757"},{"id":"41758"},{"id":"41759"}]},"id":"41830","type":"ProxyToolbar"},{"attributes":{"source":{"id":"41781"}},"id":"41783","type":"CDSView"},{"attributes":{},"id":"41821","type":"AllLabels"},{"attributes":{"below":[{"id":"41744"}],"center":[{"id":"41747"},{"id":"41751"}],"height":500,"left":[{"id":"41748"}],"output_backend":"webgl","renderers":[{"id":"41790"},{"id":"41792"},{"id":"41793"},{"id":"41794"},{"id":"41797"}],"title":{"id":"41799"},"toolbar":{"id":"41762"},"toolbar_location":null,"width":500,"x_range":{"id":"41736"},"x_scale":{"id":"41740"},"y_range":{"id":"41738"},"y_scale":{"id":"41742"}},"id":"41735","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41820"},"group":null,"major_label_policy":{"id":"41821"},"ticker":{"id":"41745"}},"id":"41744","type":"LinearAxis"},{"attributes":{},"id":"41706","type":"LinearScale"},{"attributes":{"tools":[{"id":"41716"},{"id":"41717"},{"id":"41718"},{"id":"41719"},{"id":"41720"},{"id":"41721"},{"id":"41722"},{"id":"41723"}]},"id":"41726","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41799","type":"Title"},{"attributes":{"children":[{"id":"41831"},{"id":"41829"}]},"id":"41832","type":"Column"},{"attributes":{"source":{"id":"41796"}},"id":"41798","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41809"},"selection_policy":{"id":"41808"}},"id":"41771","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41806"},"group":null,"major_label_policy":{"id":"41807"},"ticker":{"id":"41709"}},"id":"41708","type":"LinearAxis"},{"attributes":{},"id":"41709","type":"BasicTicker"}],"root_ids":["41832"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"36d042f5-c833-4112-bd23-2643e1683ff4","root_ids":["41832"],"roots":{"41832":"d20f7eed-3931-4eff-83ae-f4d6fec25068"}}];
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