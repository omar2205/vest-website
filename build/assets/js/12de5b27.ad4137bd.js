"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [75],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return c;
        },
        kt: function () {
          return w;
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
        p = {
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
            l = e.parentName,
            c = i(e, ["components", "mdxType", "originalType", "parentName"]),
            d = u(n),
            w = a,
            f = d["".concat(l, ".").concat(w)] || d[w] || p[w] || s;
          return n
            ? r.createElement(f, o(o({ ref: t }, c), {}, { components: n }))
            : r.createElement(f, o({ ref: t }, c));
        });
      function w(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var s = n.length,
            o = new Array(s);
          o[0] = d;
          var i = {};
          for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
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
    6964: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return i;
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
            return d;
          },
        });
      var r = n(7462),
        a = n(3366),
        s = (n(7294), n(3905)),
        o = ["components"],
        i = { sidebar_position: 4 },
        l = "Warn-only tests",
        u = {
          unversionedId: "writing_tests/warn_only_tests",
          id: "writing_tests/warn_only_tests",
          isDocsHomePage: !1,
          title: "Warn-only tests",
          description:
            "By default, a failing test has a severity of error. Sometimes you may need to lower the severity level of a given test to warn so that even when it fails, it should not prevent submission. An example of this would be validating password strength.",
          source: "@site/docs/writing_tests/warn_only_tests.md",
          sourceDirName: "writing_tests",
          slug: "/writing_tests/warn_only_tests",
          permalink: "/docs/writing_tests/warn_only_tests",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_tests/warn_only_tests.md",
          tags: [],
          version: "current",
          sidebarPosition: 4,
          frontMatter: { sidebar_position: 4 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Failing with a custom message",
            permalink: "/docs/writing_tests/failing_with_a_custom_message",
          },
          next: {
            title: "test.memo",
            permalink: "/docs/writing_tests/advanced_test_features/test.memo",
          },
        },
        c = [
          {
            value: "Using warning in the result object",
            id: "using-warning-in-the-result-object",
            children: [],
            level: 3,
          },
        ],
        p = { toc: c };
      function d(e) {
        var t = e.components,
          n = (0, a.Z)(e, o);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "warn-only-tests" }, "Warn-only tests"),
          (0, s.kt)(
            "p",
            null,
            "By default, a failing test has a severity of ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "error"),
            ". Sometimes you may need to lower the severity level of a given test to ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "warn"),
            " so that even when it fails, it should not prevent submission. An example of this would be validating password strength."
          ),
          (0, s.kt)(
            "p",
            null,
            "To set a test's severity level to ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "warn"),
            " call the warn function from the body of your test."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create, test, enforce, warn } from "vest";\n\nconst suite = create((data) => {\n  test("password", "A password must have at least 6 characters", () => {\n    enforce(data.password).longerThan(5);\n  }); // this test has a severity level of `error`\n\n  test("password", "Your password strength is: WEAK", () => {\n    warn();\n\n    enforce(data.password).matches(\n      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]$/\n    );\n  }); // this test has a severity level of `warn`\n\n  test("password", "Your password strength is: MEDIUM", () => {\n    warn();\n\n    enforce(data.password).matches(\n      /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]$/\n    );\n  }); // this test has a severity level of `warn`\n});\n\nconst validationResult = suite(data);\n'
            )
          ),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)(
              "strong",
              { parentName: "p" },
              "Limitations when using warn()"
            )
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "You may only use warn from within the body of a ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "test"),
              " function."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "When using ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "warn()"),
              " in an async test you should call the ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "warn"),
              " function in the sync portion of your test (and not after an ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "await"),
              " call or in the Promise body). Ideally, you want to call ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "warn()"),
              " at the top of your test function."
            )
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              '// \u2714\ntest("password", async () => {\n  warn();\n  return await someAsyncFunction();\n});\n\n// \u2714\ntest("password", () => {\n  warn();\n  return anAsyncFunction();\n});\n\n// \ud83d\udea8 This will result in an your warn() call not taking effect\ntest("password", async () => {\n  await someAsyncFunction();\n\n  warn(); // \ud83d\udea8\n});\n\n// \ud83d\udea8 This will result in an your warn() call not taking effect\ntest("password", () => {\n  return anAsyncFunction().then(() => {\n    warn(); // \ud83d\udea8\n  });\n});\n'
            )
          ),
          (0, s.kt)(
            "h3",
            { id: "using-warning-in-the-result-object" },
            "Using warning in the result object"
          ),
          (0, s.kt)(
            "p",
            null,
            "Just like you do with errors, you can access the errors in your validation warnings using these methods:"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'result.hasWarnings(); // Returns whether any warnings are present in the suite.\nresult.hasWarnings("password"); // Returns whether any warnings are present in the \'password\' field.\n\nresult.getWarnings(); // Returns an object with all the fields that have warnings, and an array of warnings for each.\nresult.getWarnings("password"); // Returns an array of warnings for the password field.\n'
            )
          ),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Read next about:")
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/writing_your_suite/result_object",
                },
                "Vest's result object"
              ),
              "."
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
