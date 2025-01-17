"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [194],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return c;
        },
        kt: function () {
          return p;
        },
      });
      var r = n(7294);
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      var l = r.createContext({}),
        u = function (e) {
          var t = r.useContext(l),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
        },
        c = function (e) {
          var t = u(e.components);
          return r.createElement(l.Provider, { value: t }, e.children);
        },
        g = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        m = r.forwardRef(function (e, t) {
          var n = e.components,
            i = e.mdxType,
            s = e.originalType,
            l = e.parentName,
            c = a(e, ["components", "mdxType", "originalType", "parentName"]),
            m = u(n),
            p = i,
            f = m["".concat(l, ".").concat(p)] || m[p] || g[p] || s;
          return n
            ? r.createElement(f, o(o({ ref: t }, c), {}, { components: n }))
            : r.createElement(f, o({ ref: t }, c));
        });
      function p(e, t) {
        var n = arguments,
          i = t && t.mdxType;
        if ("string" == typeof e || i) {
          var s = n.length,
            o = new Array(s);
          o[0] = m;
          var a = {};
          for (var l in t) hasOwnProperty.call(t, l) && (a[l] = t[l]);
          (a.originalType = e),
            (a.mdxType = "string" == typeof e ? e : i),
            (o[1] = a);
          for (var u = 2; u < s; u++) o[u] = n[u];
          return r.createElement.apply(null, o);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    8662: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return a;
          },
          contentTitle: function () {
            return l;
          },
          metadata: function () {
            return u;
          },
          toc: function () {
            return c;
          },
          default: function () {
            return m;
          },
        });
      var r = n(7462),
        i = n(3366),
        s = (n(7294), n(3905)),
        o = ["components"],
        a = { sidebar_position: 3 },
        l = "Failing with a custom message",
        u = {
          unversionedId: "writing_tests/failing_with_a_custom_message",
          id: "writing_tests/failing_with_a_custom_message",
          isDocsHomePage: !1,
          title: "Failing with a custom message",
          description:
            "Sometimes your validation logic might result in different failure reasons that are unknown before you run the test. In this case the message argument is not as useful, and instead you should omit it. Vest allows you to provide the message within the test body itself by doing one of the following:",
          source: "@site/docs/writing_tests/failing_with_a_custom_message.md",
          sourceDirName: "writing_tests",
          slug: "/writing_tests/failing_with_a_custom_message",
          permalink: "/docs/writing_tests/failing_with_a_custom_message",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_tests/failing_with_a_custom_message.md",
          tags: [],
          version: "current",
          sidebarPosition: 3,
          frontMatter: { sidebar_position: 3 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Writing Asynchronous Tests",
            permalink: "/docs/writing_tests/async_tests",
          },
          next: {
            title: "Warn-only tests",
            permalink: "/docs/writing_tests/warn_only_tests",
          },
        },
        c = [
          {
            value: "Throwing a string",
            id: "throwing-a-string",
            children: [],
            level: 2,
          },
          {
            value: "Rejecting with a string",
            id: "rejecting-with-a-string",
            children: [],
            level: 2,
          },
        ],
        g = { toc: c };
      function m(e) {
        var t = e.components,
          n = (0, i.Z)(e, o);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, g, n, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)(
            "h1",
            { id: "failing-with-a-custom-message" },
            "Failing with a custom message"
          ),
          (0, s.kt)(
            "p",
            null,
            "Sometimes your validation logic might result in different failure reasons that are unknown before you run the test. In this case the message argument is not as useful, and instead you should omit it. Vest allows you to provide the message within the test body itself by doing one of the following:"
          ),
          (0, s.kt)("h2", { id: "throwing-a-string" }, "Throwing a string"),
          (0, s.kt)(
            "p",
            null,
            "If the message param is omitted, and the test throws a string value, the string will be used as the test's message:"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'test("price", () => {\n  if (price < 0) {\n    throw "Price must be positive";\n  }\n});\n'
            )
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce.extend({\n  isPositive: (value) => {\n    return {\n      pass: value > 0,\n      message: () => "value must be positive",\n    };\n  },\n});\n\ntest("price", () => {\n  enforce(price).isPositive(); // will fail with the message: "value must be positive"\n});\n'
            )
          ),
          (0, s.kt)(
            "h2",
            { id: "rejecting-with-a-string" },
            "Rejecting with a string"
          ),
          (0, s.kt)(
            "p",
            null,
            "Async tests can reject their promise with the string as well:"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'test("price", () => {\n  return apiCall().then(() => {\n    throw "Price must be positive";\n  });\n});\n\ntest("price", () => {\n  return Promise.reject("Price must be positive");\n});\n'
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
