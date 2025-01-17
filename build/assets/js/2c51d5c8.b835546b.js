"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [888],
  {
    3905: function (e, t, r) {
      r.d(t, {
        Zo: function () {
          return l;
        },
        kt: function () {
          return p;
        },
      });
      var n = r(7294);
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              s = Object.keys(e);
            for (n = 0; n < s.length; n++)
              (r = s[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (n = 0; n < s.length; n++)
            (r = s[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var c = n.createContext({}),
        u = function (e) {
          var t = n.useContext(c),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : o(o({}, t), e)), r;
        },
        l = function (e) {
          var t = u(e.components);
          return n.createElement(c.Provider, { value: t }, e.children);
        },
        m = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        d = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            s = e.originalType,
            c = e.parentName,
            l = i(e, ["components", "mdxType", "originalType", "parentName"]),
            d = u(r),
            p = a,
            f = d["".concat(c, ".").concat(p)] || d[p] || m[p] || s;
          return r
            ? n.createElement(f, o(o({ ref: t }, l), {}, { components: r }))
            : n.createElement(f, o({ ref: t }, l));
        });
      function p(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var s = r.length,
            o = new Array(s);
          o[0] = d;
          var i = {};
          for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
          (i.originalType = e),
            (i.mdxType = "string" == typeof e ? e : a),
            (o[1] = i);
          for (var u = 2; u < s; u++) o[u] = r[u];
          return n.createElement.apply(null, o);
        }
        return n.createElement.apply(null, r);
      }
      d.displayName = "MDXCreateElement";
    },
    8545: function (e, t, r) {
      r.r(t),
        r.d(t, {
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
      var n = r(7462),
        a = r(3366),
        s = (r(7294), r(3905)),
        o = ["components"],
        i = { sidebar_position: 1 },
        c = void 0,
        u = {
          unversionedId: "writing_tests/advanced_test_features/test.memo",
          id: "writing_tests/advanced_test_features/test.memo",
          isDocsHomePage: !1,
          title: "test.memo",
          description: "test.memo for memoized tests",
          source:
            "@site/docs/writing_tests/advanced_test_features/test.memo.md",
          sourceDirName: "writing_tests/advanced_test_features",
          slug: "/writing_tests/advanced_test_features/test.memo",
          permalink: "/docs/writing_tests/advanced_test_features/test.memo",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_tests/advanced_test_features/test.memo.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Warn-only tests",
            permalink: "/docs/writing_tests/warn_only_tests",
          },
          next: {
            title: "test.each",
            permalink: "/docs/writing_tests/advanced_test_features/test.each",
          },
        },
        l = [
          {
            value: "test.memo for memoized tests",
            id: "testmemo-for-memoized-tests",
            children: [
              { value: "Usage:", id: "usage", children: [], level: 3 },
              { value: "Example:", id: "example", children: [], level: 3 },
            ],
            level: 2,
          },
        ],
        m = { toc: l };
      function d(e) {
        var t = e.components,
          r = (0, a.Z)(e, o);
        return (0, s.kt)(
          "wrapper",
          (0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)(
            "h2",
            { id: "testmemo-for-memoized-tests" },
            "test.memo for memoized tests"
          ),
          (0, s.kt)(
            "p",
            null,
            "In order to improve performance and runtime in heavy or long-running tests (such as async tests that go to the server), tests individual test results can be cached and saved for a later time, so whenever the exact same params appear again in the same runtime, the test result will be used from cache, instead of having to be re-evaluated."
          ),
          (0, s.kt)("h3", { id: "usage" }, "Usage:"),
          (0, s.kt)(
            "p",
            null,
            "Memoized tests are almost identical to regular tests, only with the added dependency array as the last argument. The dependency array is an array of items, that when identical (strict equality, ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "==="),
            ") to a previously presented array in the same test, its previous result will be used. You can see it as your cache key to the test result."
          ),
          (0, s.kt)("h3", { id: "example" }, "Example:"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { vest, test } from "vest";\nexport default create((data) => {\n  test.memo(\n    "username",\n    "username already exists",\n    () => doesUserExist(data.username),\n    [data.username]\n  );\n});\n'
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
