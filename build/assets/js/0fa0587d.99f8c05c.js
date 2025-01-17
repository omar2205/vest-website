"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [605],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return l;
        },
        kt: function () {
          return p;
        },
      });
      var r = n(7294);
      function a(e, t, n) {
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
                a(e, t, n[t]);
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
      function i(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var c = r.createContext({}),
        u = function (e) {
          var t = r.useContext(c),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
        },
        l = function (e) {
          var t = u(e.components);
          return r.createElement(c.Provider, { value: t }, e.children);
        },
        f = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        d = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            s = e.originalType,
            c = e.parentName,
            l = i(e, ["components", "mdxType", "originalType", "parentName"]),
            d = u(n),
            p = a,
            m = d["".concat(c, ".").concat(p)] || d[p] || f[p] || s;
          return n
            ? r.createElement(m, o(o({ ref: t }, l), {}, { components: n }))
            : r.createElement(m, o({ ref: t }, l));
        });
      function p(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var s = n.length,
            o = new Array(s);
          o[0] = d;
          var i = {};
          for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
          (i.originalType = e),
            (i.mdxType = "string" == typeof e ? e : a),
            (o[1] = i);
          for (var u = 2; u < s; u++) o[u] = n[u];
          return r.createElement.apply(null, o);
        }
        return r.createElement.apply(null, n);
      }
      d.displayName = "MDXCreateElement";
    },
    404: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return i;
          },
          contentTitle: function () {
            return c;
          },
          metadata: function () {
            return u;
          },
          toc: function () {
            return l;
          },
          default: function () {
            return d;
          },
        });
      var r = n(7462),
        a = n(3366),
        s = (n(7294), n(3905)),
        o = ["components"],
        i = { sidebar_position: 2 },
        c = void 0,
        u = {
          unversionedId: "writing_tests/advanced_test_features/test.each",
          id: "writing_tests/advanced_test_features/test.each",
          isDocsHomePage: !1,
          title: "test.each",
          description: "test.each for dynamically creating tests from a table",
          source:
            "@site/docs/writing_tests/advanced_test_features/test.each.md",
          sourceDirName: "writing_tests/advanced_test_features",
          slug: "/writing_tests/advanced_test_features/test.each",
          permalink: "/docs/writing_tests/advanced_test_features/test.each",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_tests/advanced_test_features/test.each.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "test.memo",
            permalink: "/docs/writing_tests/advanced_test_features/test.memo",
          },
          next: {
            title: "Grouping tests",
            permalink:
              "/docs/writing_tests/advanced_test_features/grouping_tests",
          },
        },
        l = [
          {
            value: "test.each for dynamically creating tests from a table",
            id: "testeach-for-dynamically-creating-tests-from-a-table",
            children: [],
            level: 2,
          },
        ],
        f = { toc: l };
      function d(e) {
        var t = e.components,
          n = (0, a.Z)(e, o);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, f, n, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)(
            "h2",
            { id: "testeach-for-dynamically-creating-tests-from-a-table" },
            "test.each for dynamically creating tests from a table"
          ),
          (0, s.kt)(
            "p",
            null,
            "Use test.each when you need to dynamically create tests from data, or when you have multiple tests that have the same overall structure."
          ),
          (0, s.kt)(
            "p",
            null,
            "test.each takes an array of arrays. The inner array contains the arguments that each of the tests will receive."
          ),
          (0, s.kt)(
            "p",
            null,
            "Because of the dynamic nature of the iterative tests, you can also dynamically construct the fieldName and the test message by providing a function instead of a string. Your array's content will be passed over as arguments to each of these functions."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "/*\nconst data = {\n  products: [\n    ['Game Boy Color', 25],\n    ['Speak & Spell', 22.5],\n    ['Tamagotchi', 15],\n    ['Connect Four', 7.88],\n  ]\n}\n*/\n\nconst suite = create((data) => {\n  test.each(data.products)(\n    (name) => name,\n    \"Price must be numeric and above zero.\",\n    (_, price) => {\n      enforce(price).isNumeric().greaterThan(0);\n    }\n  );\n});\n"
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
