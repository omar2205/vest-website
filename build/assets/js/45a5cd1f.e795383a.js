"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [365],
  {
    3905: function (e, t, r) {
      r.d(t, {
        Zo: function () {
          return l;
        },
        kt: function () {
          return d;
        },
      });
      var n = r(7294);
      function i(e, t, r) {
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
      function o(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      var u = n.createContext({}),
        c = function (e) {
          var t = n.useContext(u),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : a(a({}, t), e)), r;
        },
        l = function (e) {
          var t = c(e.components);
          return n.createElement(u.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        f = n.forwardRef(function (e, t) {
          var r = e.components,
            i = e.mdxType,
            o = e.originalType,
            u = e.parentName,
            l = s(e, ["components", "mdxType", "originalType", "parentName"]),
            f = c(r),
            d = i,
            m = f["".concat(u, ".").concat(d)] || f[d] || p[d] || o;
          return r
            ? n.createElement(m, a(a({ ref: t }, l), {}, { components: r }))
            : n.createElement(m, a({ ref: t }, l));
        });
      function d(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ("string" == typeof e || i) {
          var o = r.length,
            a = new Array(o);
          a[0] = f;
          var s = {};
          for (var u in t) hasOwnProperty.call(t, u) && (s[u] = t[u]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : i),
            (a[1] = s);
          for (var c = 2; c < o; c++) a[c] = r[c];
          return n.createElement.apply(null, a);
        }
        return n.createElement.apply(null, r);
      }
      f.displayName = "MDXCreateElement";
    },
    5059: function (e, t, r) {
      r.r(t),
        r.d(t, {
          frontMatter: function () {
            return s;
          },
          contentTitle: function () {
            return u;
          },
          metadata: function () {
            return c;
          },
          toc: function () {
            return l;
          },
          default: function () {
            return f;
          },
        });
      var n = r(7462),
        i = r(3366),
        o = (r(7294), r(3905)),
        a = ["components"],
        s = { sidebar_position: 2 },
        u = "Core Concepts",
        c = {
          unversionedId: "concepts",
          id: "concepts",
          isDocsHomePage: !1,
          title: "Core Concepts",
          description:
            "Vest is a form validations framework inspired by the syntax and style of unit testing tools like Mocha or Jest, so naturally, using Vest will feel familiar. Under the hood, though, Vest has some differences that make it more suitable for use with form validation.",
          source: "@site/docs/concepts.md",
          sourceDirName: ".",
          slug: "/concepts",
          permalink: "/docs/concepts",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/concepts.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Getting Started",
            permalink: "/docs/get_started",
          },
          next: { title: "API Reference", permalink: "/docs/api_reference" },
        },
        l = [
          {
            value: "Validations are written in a Vest suite",
            id: "validations-are-written-in-a-vest-suite",
            children: [],
            level: 2,
          },
          {
            value: "Vest is stateful",
            id: "vest-is-stateful",
            children: [],
            level: 2,
          },
          {
            value: "Vest is framework agnostic",
            id: "vest-is-framework-agnostic",
            children: [
              {
                value: "Can I run Vest in my production app?",
                id: "can-i-run-vest-in-my-production-app",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
        ],
        p = { toc: l };
      function f(e) {
        var t = e.components,
          r = (0, i.Z)(e, a);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, p, r, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "core-concepts" }, "Core Concepts"),
          (0, o.kt)(
            "p",
            null,
            "Vest is a form validations framework inspired by the syntax and style of unit testing tools like Mocha or Jest, so naturally, using Vest will feel familiar. Under the hood, though, Vest has some differences that make it more suitable for use with form validation."
          ),
          (0, o.kt)(
            "h2",
            { id: "validations-are-written-in-a-vest-suite" },
            "Validations are written in a Vest suite"
          ),
          (0, o.kt)(
            "p",
            null,
            "Separate from your feature code, you can define a validation suite. The suite is where the validations of a given form reside. The suite returns a function, and you can pass it whatever data you have in your form."
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create } from "vest";\n\nconst suite = create((data = {}) => {\n  // Your tests are here\n});\n'
            )
          ),
          (0, o.kt)("h2", { id: "vest-is-stateful" }, "Vest is stateful"),
          (0, o.kt)(
            "p",
            null,
            "When you create a suite, it also initializes a suite-state. The suite-state is where the current validation results are stored, and it is merged with the next suite-state when the suite is run. This allows for very performant validations of just the field the user is interacting with."
          ),
          (0, o.kt)(
            "h2",
            { id: "vest-is-framework-agnostic" },
            "Vest is framework agnostic"
          ),
          (0, o.kt)(
            "p",
            null,
            "Because you write your validation suite outside of your feature code, and Vest retains its own state, you can use Vest with any framework you want, only requiring a limited interface with your feature code."
          ),
          (0, o.kt)("h1", { id: "common-questions" }, "Common Questions"),
          (0, o.kt)(
            "h3",
            { id: "can-i-run-vest-in-my-production-app" },
            "Can I run Vest in my production app?"
          ),
          (0, o.kt)(
            "p",
            null,
            "Unlike testing libraries, Vest runs in your production app. Vest does look like a testing framework, but it is also very conscious of your runtime in terms of performance and resources."
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
