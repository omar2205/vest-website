"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [282],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return u;
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
      var l = r.createContext({}),
        d = function (e) {
          var t = r.useContext(l),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
        },
        u = function (e) {
          var t = d(e.components);
          return r.createElement(l.Provider, { value: t }, e.children);
        },
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        m = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            s = e.originalType,
            l = e.parentName,
            u = i(e, ["components", "mdxType", "originalType", "parentName"]),
            m = d(n),
            p = a,
            v = m["".concat(l, ".").concat(p)] || m[p] || c[p] || s;
          return n
            ? r.createElement(v, o(o({ ref: t }, u), {}, { components: n }))
            : r.createElement(v, o({ ref: t }, u));
        });
      function p(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var s = n.length,
            o = new Array(s);
          o[0] = m;
          var i = {};
          for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
          (i.originalType = e),
            (i.mdxType = "string" == typeof e ? e : a),
            (o[1] = i);
          for (var d = 2; d < s; d++) o[d] = n[d];
          return r.createElement.apply(null, o);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    7883: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return i;
          },
          contentTitle: function () {
            return l;
          },
          metadata: function () {
            return d;
          },
          toc: function () {
            return u;
          },
          default: function () {
            return m;
          },
        });
      var r = n(7462),
        a = n(3366),
        s = (n(7294), n(3905)),
        o = ["components"],
        i = { sidebar_position: 10 },
        l = "Upgrade guides",
        d = {
          unversionedId: "migration_guide",
          id: "migration_guide",
          isDocsHomePage: !1,
          title: "Upgrade guides",
          description: "Upgrading from V3 to V4",
          source: "@site/docs/migration_guide.md",
          sourceDirName: ".",
          slug: "/migration_guide",
          permalink: "/docs/migration_guide",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/migration_guide.md",
          tags: [],
          version: "current",
          sidebarPosition: 10,
          frontMatter: { sidebar_position: 10 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Using Vest in node",
            permalink: "/docs/recipies/using_with_node",
          },
          next: {
            title: "Understanding Vest's state",
            permalink: "/docs/understanding_state",
          },
        },
        u = [
          {
            value: "Upgrading from V3 to V4",
            id: "upgrading-from-v3-to-v4",
            children: [
              {
                value: "Removed: Default import support",
                id: "removed-default-import-support",
                children: [
                  { value: "V3", id: "v3", children: [], level: 4 },
                  { value: "V4", id: "v4", children: [], level: 4 },
                ],
                level: 3,
              },
              {
                value: "Renamed: classNames to classnames",
                id: "renamed-classnames-to-classnames",
                children: [
                  { value: "V3", id: "v3-1", children: [], level: 4 },
                  { value: "V4", id: "v4-1", children: [], level: 4 },
                ],
                level: 3,
              },
              {
                value:
                  "Changed: Do not use if/else statements to conditionally run tests",
                id: "changed-do-not-use-ifelse-statements-to-conditionally-run-tests",
                children: [
                  { value: "V3", id: "v3-2", children: [], level: 4 },
                  { value: "V4", id: "v4-2", children: [], level: 4 },
                ],
                level: 3,
              },
              {
                value: "Replaced: enforce.template",
                id: "replaced-enforcetemplate",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "Upgrading from V2 to V3",
            id: "upgrading-from-v2-to-v3",
            children: [
              {
                value: "Removed: vest.get()",
                id: "removed-vestget",
                children: [
                  { value: "v2", id: "v2", children: [], level: 4 },
                  { value: "v3", id: "v3-3", children: [], level: 4 },
                ],
                level: 3,
              },
              {
                value: "Removed: vest.reset() // To reset suite state",
                id: "removed-vestreset--to-reset-suite-state",
                children: [
                  { value: "v2", id: "v2-1", children: [], level: 4 },
                  { value: "v3", id: "v3-4", children: [], level: 4 },
                ],
                level: 3,
              },
              {
                value:
                  "Removed: vest.draft() // To retrieve intermediate result",
                id: "removed-vestdraft--to-retrieve-intermediate-result",
                children: [
                  { value: "v2", id: "v2-2", children: [], level: 4 },
                  { value: "v3", id: "v3-5", children: [], level: 4 },
                ],
                level: 3,
              },
              {
                value: "Removed: validate() // For non persistent validations",
                id: "removed-validate--for-non-persistent-validations",
                children: [
                  { value: "v2", id: "v2-3", children: [], level: 4 },
                  { value: "v3", id: "v3-6", children: [], level: 4 },
                ],
                level: 3,
              },
            ],
            level: 2,
          },
        ],
        c = { toc: u };
      function m(e) {
        var t = e.components,
          n = (0, a.Z)(e, o);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "upgrade-guides" }, "Upgrade guides"),
          (0, s.kt)(
            "h2",
            { id: "upgrading-from-v3-to-v4" },
            "Upgrading from V3 to V4"
          ),
          (0, s.kt)(
            "p",
            null,
            "Vest 4.0 is a major release that contains several breaking changes. Most should be pretty simple to migrate, but there are a few things that require a bit more attention."
          ),
          (0, s.kt)(
            "h3",
            { id: "removed-default-import-support" },
            "Removed: Default import support"
          ),
          (0, s.kt)(
            "p",
            null,
            "For better tree shaking, we removed the default import support. This means that if you need a part of the library, you will need to import it explicitly, resulting in a smaller eventual bundle size."
          ),
          (0, s.kt)("h4", { id: "v3" }, "V3"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import vest from "vest";\n'
            )
          ),
          (0, s.kt)("h4", { id: "v4" }, "V4"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import * as vest from "vest";\n// OR:\nimport { create, test, enforce } from "vest";\n'
            )
          ),
          (0, s.kt)(
            "h3",
            { id: "renamed-classnames-to-classnames" },
            "Renamed: classNames to classnames"
          ),
          (0, s.kt)(
            "p",
            null,
            "Vest 3 included the ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "vest/classNames"),
            " import. It is now renamed to ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "vest/classnames"),
            "."
          ),
          (0, s.kt)("h4", { id: "v3-1" }, "V3"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import classNames from "vest/classNames";\n'
            )
          ),
          (0, s.kt)("h4", { id: "v4-1" }, "V4"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import classnames from "vest/classnames";\n'
            )
          ),
          (0, s.kt)(
            "h3",
            {
              id: "changed-do-not-use-ifelse-statements-to-conditionally-run-tests",
            },
            "Changed: Do not use if/else statements to conditionally run tests"
          ),
          (0, s.kt)(
            "p",
            null,
            "Vest version 4 relies on order of execution and remembers the result of each test based on its location in the suite, similar to the way ",
            (0, s.kt)(
              "a",
              {
                parentName: "p",
                href: "https://reactjs.org/docs/hooks-rules.html",
              },
              "hooks in react"
            ),
            " work. This means that tests wrapped in an if/else statement make Vest go out of sync with the suite order, and unexecuted test results will be recorded. Instead of using if/else statements, you should use the ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "skipWhen"),
            " function that achieves the same result."
          ),
          (0, s.kt)("h4", { id: "v3-2" }, "V3"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'if (!suite.get().hasErrors("password")) {\n  test("confirm", "passwords do not match", () => {\n    /*...*/\n  });\n}\n'
            )
          ),
          (0, s.kt)("h4", { id: "v4-2" }, "V4"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { skipWhen, test } from "vest";\n\n// ...\n\nskipWhen(\n  (res) => res.hasErrors("password"),\n  () => {\n    test("confirm", "passwords do not match", () => {\n      /*...*/\n    });\n  }\n);\n\n// ...\n'
            )
          ),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Note"),
            "\nIf you want to completely omit a test from your suite, and you know that it won't appear at all during the lifetime of your suite, you may use ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "if/else"),
            "."
          ),
          (0, s.kt)(
            "h3",
            { id: "replaced-enforcetemplate" },
            "Replaced: enforce.template"
          ),
          (0, s.kt)(
            "p",
            null,
            "enforce.template was a helpful function that allowed the composition of multiple validators. It is now replaced by the ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "compose"),
            " function, exported from ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "vest/enforce-compose")
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)(
                "a",
                { parentName: "li", href: "./enforce/composing_enforce_rules" },
                "read more"
              )
            )
          ),
          (0, s.kt)(
            "h2",
            { id: "upgrading-from-v2-to-v3" },
            "Upgrading from V2 to V3"
          ),
          (0, s.kt)(
            "p",
            null,
            "Vest version 3 comes with many new features, yet with a reduced bundle size. To achieve this, some redundant interfaces were removed. All v2 capabilities still exist, but the way to use some of them changed."
          ),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Replaced interfaces")
          ),
          (0, s.kt)("h3", { id: "removed-vestget" }, "Removed: vest.get()"),
          (0, s.kt)(
            "p",
            null,
            "From now on, use suite.get() to get the latest validation result."
          ),
          (0, s.kt)("h4", { id: "v2" }, "v2"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'const suite = vest.create("user_form", () => {\n  /*...*/\n});\n\nvest.get("user_form"); // Returns the most recent validation result\n'
            )
          ),
          (0, s.kt)("h4", { id: "v3-3" }, "v3"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "const suite = create(() => {\n  /*...*/\n});\n\nsuite.get(); // Returns the most recent validation result\n"
            )
          ),
          (0, s.kt)(
            "h3",
            { id: "removed-vestreset--to-reset-suite-state" },
            "Removed: vest.reset() // To reset suite state"
          ),
          (0, s.kt)(
            "p",
            null,
            "From now on, use suite.reset() to reset the validation result."
          ),
          (0, s.kt)("h4", { id: "v2-1" }, "v2"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'const suite = vest.create("user_form", () => {\n  /*...*/\n});\n\nvest.reset("user_form"); // Resets the validity state\n'
            )
          ),
          (0, s.kt)("h4", { id: "v3-4" }, "v3"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "const suite = create(() => {\n  /*...*/\n});\n\nsuite.reset(); // Resets the validity state\n"
            )
          ),
          (0, s.kt)(
            "h3",
            { id: "removed-vestdraft--to-retrieve-intermediate-result" },
            "Removed: vest.draft() // To retrieve intermediate result"
          ),
          (0, s.kt)(
            "p",
            null,
            "From now on, use suite.get() to get the validation result."
          ),
          (0, s.kt)("h4", { id: "v2-2" }, "v2"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'const suite = vest.create("user_form", () => {\n  if (vest.draft().hasErrors("username")) {\n    /* ... */\n  }\n});\n'
            )
          ),
          (0, s.kt)("h4", { id: "v3-5" }, "v3"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'const suite = create("user_form", () => {\n  skipWhen(\n    (res) => res.hasErrors("username"),\n    () => {\n      /* ... */\n    }\n  );\n});\n'
            )
          ),
          (0, s.kt)(
            "h3",
            { id: "removed-validate--for-non-persistent-validations" },
            "Removed: validate() // For non persistent validations"
          ),
          (0, s.kt)(
            "p",
            null,
            "The stateless validate export is not needed anymore due to a change in the state structure."
          ),
          (0, s.kt)("h4", { id: "v2-3" }, "v2"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { validate } from "vest";\n\nconst result = (data) =>\n  validate("user_form", () => {\n    /*...*/\n  })();\n'
            )
          ),
          (0, s.kt)("h4", { id: "v3-6" }, "v3"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create } from "vest";\n\nconst suite = (data) =>\n  create(() => {\n    /* ... */\n  })();\n\nconst result = suite({ username: "example" });\n'
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
