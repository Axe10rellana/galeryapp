(this.webpackJsonpgaleryapp = this.webpackJsonpgaleryapp || []).push([
  [0],
  {
    14: function (e, t, a) {},
    17: function (e, t, a) {},
    18: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(1),
        s = a.n(r),
        n = a(5),
        c = a.n(n),
        i = (a(14), a(0)),
        l = function () {
          return Object(i.jsx)("div", {
            children: Object(i.jsx)("header", {
              className: "text-center header-style",
              children: Object(i.jsx)("div", {
                className: "container",
                children: Object(i.jsxs)("div", {
                  className: "row",
                  children: [
                    Object(i.jsx)("div", {
                      className: "col-md-4 header-col",
                      children: Object(i.jsx)("a", {
                        className: "linkHome",
                        href: "https://Axe10rellana.github.io/galeryapp/galeryapp",
                        children: "Galery App",
                      }),
                    }),
                    Object(i.jsxs)("div", {
                      className: "col-md-4 header-col",
                      children: [
                        Object(i.jsx)("h3", { children: "Direcci\xf3n" }),
                        Object(i.jsxs)("p", {
                          children: [
                            "Merlo - Argentina ",
                            Object(i.jsx)("br", {}),
                            "Urien 188",
                          ],
                        }),
                      ],
                    }),
                    Object(i.jsxs)("div", {
                      className: "col-md-4 header-col",
                      children: [
                        Object(i.jsx)("h3", { children: "Mis redes" }),
                        Object(i.jsxs)("ul", {
                          className: "list-inline",
                          children: [
                            Object(i.jsx)("li", {
                              children: Object(i.jsx)("a", {
                                target: "blank",
                                href: "https://www.linkedin.com/in/axel-orellana/",
                                className: "btn-social btn-outline",
                                children: Object(i.jsx)("i", {
                                  className: "fa fa-fw fa-linkedin",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        o = a(2),
        j = a.n(o),
        h = a(4),
        d = a(6),
        u = a(7),
        b = a(9),
        m = a(8),
        x = function (e) {
          var t = e.image,
            a = e.title;
          return Object(i.jsx)("div", {
            children: Object(i.jsx)("img", {
              src: t,
              alt: a,
              className: "img",
            }),
          });
        },
        f =
          (a(17),
          a.p + "galeryapp/galeryapp/static/media/three-dots.ff017a37.svg"),
        p = function () {
          return Object(i.jsx)("div", {
            children: Object(i.jsx)("img", {
              className: "loader",
              src: f,
              alt: "Cargando...",
            }),
          });
        },
        O = "https://api.unsplash.com",
        v = "t8hpPK9laUOZI1xUP_JaVr2PlpYgQEyvrA8FIv6GjiY",
        g = (function (e) {
          Object(b.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            return (
              Object(d.a)(this, a),
              ((e = t.call(this)).state = {
                images: [],
                searchTerm: "",
                error: "",
                loading: !1,
              }),
              e
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: "componentDidMount",
                value: (function () {
                  var e = Object(h.a)(
                    j.a.mark(function e() {
                      var t, a, r;
                      return j.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.setState({ loading: !0 }),
                                  (t = ""
                                    .concat(O, "/photos/random?client_id=")
                                    .concat(v, "&count=8")),
                                  (e.next = 4),
                                  fetch(t)
                                );
                              case 4:
                                return (a = e.sent), (e.next = 7), a.json();
                              case 7:
                                (r = e.sent),
                                  //console.log(r),
                                  this.setState({ images: r, loading: !1 });
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "handleSubmit",
                value: (function () {
                  var e = Object(h.a)(
                    j.a.mark(function e(t) {
                      var a, r, s;
                      return j.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (t.preventDefault(),
                                  this.setState({ loading: !0 }),
                                  this.state.searchTerm)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.setState({
                                    error: "Por favor escribe un texto valido",
                                    loading: !1,
                                  })
                                );
                              case 4:
                                return (
                                  (a = ""
                                    .concat(O, "/search/photos/?query=")
                                    .concat(
                                      this.state.searchTerm,
                                      "&per_page=8&client_id="
                                    )
                                    .concat(v)),
                                  (e.next = 7),
                                  fetch(a)
                                );
                              case 7:
                                return (r = e.sent), (e.next = 10), r.json();
                              case 10:
                                if (
                                  ((s = e.sent),
                                  //console.log(s),
                                  s.results.length)
                                ) {
                                  e.next = 14;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.setState({
                                    error: "No hay resultados",
                                    loading: !1,
                                  })
                                );
                              case 14:
                                this.setState({
                                  images: s.results,
                                  error: "",
                                  searchTerm: "",
                                  loading: !1,
                                });
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.images,
                    r = t.loading;
                  return Object(i.jsxs)("div", {
                    children: [
                      Object(i.jsx)("div", {
                        className: "row",
                        children: Object(i.jsxs)("div", {
                          className: "col-md-4 offset-md-4 p-4",
                          children: [
                            Object(i.jsx)("form", {
                              onSubmit: function (t) {
                                return e.handleSubmit(t);
                              },
                              children: Object(i.jsx)("input", {
                                type: "text",
                                className: "form-control",
                                placeholder:
                                  "Buscar una categoria: Por Ejemplo Animals",
                                autoComplete: "off",
                                autoFocus: !0,
                                onChange: function (t) {
                                  return e.setState({
                                    searchTerm: t.target.value,
                                  });
                                },
                                value: this.state.searchTerm,
                              }),
                            }),
                            Object(i.jsx)("p", {
                              children: this.state.error
                                ? this.state.error
                                : "",
                            }),
                            r && Object(i.jsx)(p, {}),
                          ],
                        }),
                      }),
                      Object(i.jsx)("div", {
                        className: "gridImg",
                        children: a.map(function (e, t) {
                          return Object(i.jsx)(
                            x,
                            { title: e.alt_description, image: e.urls.thumb },
                            t
                          );
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        N = function () {
          return Object(i.jsxs)("div", {
            children: [
              Object(i.jsx)(l, {}),
              Object(i.jsx)("main", {
                children: Object(i.jsx)("div", {
                  className: "container",
                  children: Object(i.jsx)(g, {}),
                }),
              }),
            ],
          });
        };
      c.a.render(
        Object(i.jsx)(s.a.StrictMode, { children: Object(i.jsx)(N, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[18, 1, 2]],
]);
//# sourceMappingURL=main.61c966c8.chunk.js.map
