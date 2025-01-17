"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [813],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return l;
        },
        kt: function () {
          return m;
        },
      });
      var r = n(7294);
      function o(e, t, n) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
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
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var c = r.createContext({}),
        u = function (e) {
          var t = r.useContext(c),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        l = function (e) {
          var t = u(e.components);
          return r.createElement(c.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        f = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            s = e.originalType,
            c = e.parentName,
            l = a(e, ["components", "mdxType", "originalType", "parentName"]),
            f = u(n),
            m = o,
            y = f["".concat(c, ".").concat(m)] || f[m] || p[m] || s;
          return n
            ? r.createElement(y, i(i({ ref: t }, l), {}, { components: n }))
            : r.createElement(y, i({ ref: t }, l));
        });
      function m(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var s = n.length,
            i = new Array(s);
          i[0] = f;
          var a = {};
          for (var c in t) hasOwnProperty.call(t, c) && (a[c] = t[c]);
          (a.originalType = e),
            (a.mdxType = "string" == typeof e ? e : o),
            (i[1] = a);
          for (var u = 2; u < s; u++) i[u] = n[u];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, n);
      }
      f.displayName = "MDXCreateElement";
    },
    601: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return a;
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
            return f;
          },
        });
      var r = n(7462),
        o = n(3366),
        s = (n(7294), n(3905)),
        i = ["components"],
        a = { sidebar_position: 2 },
        c = "Writing Asynchronous Tests",
        u = {
          unversionedId: "writing_tests/async_tests",
          id: "writing_tests/async_tests",
          isDocsHomePage: !1,
          title: "Writing Asynchronous Tests",
          description:
            "Sometimes you need to validate your data with information not present in your current context, for example - data from the server, such as username availability. In those cases, you need to go out to the server and fetch data as part of your validation logic.",
          source: "@site/docs/writing_tests/async_tests.md",
          sourceDirName: "writing_tests",
          slug: "/writing_tests/async_tests",
          permalink: "/docs/writing_tests/async_tests",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_tests/async_tests.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "The Test Function",
            permalink: "/docs/writing_tests/using_the_test_function",
          },
          next: {
            title: "Failing with a custom message",
            permalink: "/docs/writing_tests/failing_with_a_custom_message",
          },
        },
        l = [],
        p = { toc: l };
      function f(e) {
        var t = e.components,
          n = (0, o.Z)(e, i);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)(
            "h1",
            { id: "writing-asynchronous-tests" },
            "Writing Asynchronous Tests"
          ),
          (0, s.kt)(
            "p",
            null,
            "Sometimes you need to validate your data with information not present in your current context, for example - data from the server, such as username availability. In those cases, you need to go out to the server and fetch data as part of your validation logic."
          ),
          (0, s.kt)(
            "p",
            null,
            "An async test is declared by returning a promise from your test body (or making it an async function). When the promise resolves, your test passes, and when your promise rejects, it fails."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              '// Example using a promise\ntest("name", "I always fail", () => Promise.reject());\n\n// Example using async/await\ntest("name", "Already Taken", async () => {\n  return await doesUserExist(user);\n});\n'
            )
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
