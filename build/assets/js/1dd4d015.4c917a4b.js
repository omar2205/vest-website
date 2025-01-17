"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [164],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return u;
        },
        kt: function () {
          return m;
        },
      });
      var a = n(7294);
      function r(e, t, n) {
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
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var l = a.createContext({}),
        d = function (e) {
          var t = a.useContext(l),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n;
        },
        u = function (e) {
          var t = d(e.components);
          return a.createElement(l.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        c = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            i = e.originalType,
            l = e.parentName,
            u = o(e, ["components", "mdxType", "originalType", "parentName"]),
            c = d(n),
            m = r,
            h = c["".concat(l, ".").concat(m)] || c[m] || p[m] || i;
          return n
            ? a.createElement(h, s(s({ ref: t }, u), {}, { components: n }))
            : a.createElement(h, s({ ref: t }, u));
        });
      function m(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var i = n.length,
            s = new Array(i);
          s[0] = c;
          var o = {};
          for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
          (o.originalType = e),
            (o.mdxType = "string" == typeof e ? e : r),
            (s[1] = o);
          for (var d = 2; d < i; d++) s[d] = n[d];
          return a.createElement.apply(null, s);
        }
        return a.createElement.apply(null, n);
      }
      c.displayName = "MDXCreateElement";
    },
    9263: function (e, t, n) {
      n.r(t),
        n.d(t, {
          frontMatter: function () {
            return o;
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
            return c;
          },
        });
      var a = n(7462),
        r = n(3366),
        i = (n(7294), n(3905)),
        s = ["components"],
        o = { sidebar_position: 2 },
        l = "The Result Object",
        d = {
          unversionedId: "writing_your_suite/result_object",
          id: "writing_your_suite/result_object",
          isDocsHomePage: !1,
          title: "The Result Object",
          description:
            "Vest validations return a results object that holds all the information regarding the current run and methods to interact with the data.",
          source: "@site/docs/writing_your_suite/result_object.md",
          sourceDirName: "writing_your_suite",
          slug: "/writing_your_suite/result_object",
          permalink: "/docs/writing_your_suite/result_object",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/writing_your_suite/result_object.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Vest's Suite",
            permalink: "/docs/writing_your_suite/vests_suite",
          },
          next: {
            title: "Excluding and including tests",
            permalink:
              "/docs/writing_your_suite/including_and_excluding/skip_and_only",
          },
        },
        u = [
          {
            value: "<code>isValid</code>",
            id: "isvalid",
            children: [
              {
                value: "Suite validity",
                id: "suite-validity",
                children: [],
                level: 3,
              },
              {
                value: "Field validity",
                id: "field-validity",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "<code>hasErrors</code> and <code>hasWarnings</code>",
            id: "haserrors-and-haswarnings",
            children: [],
            level: 2,
          },
          {
            value:
              "<code>hasErrorsByGroup</code> and <code>hasWarningsByGroup</code>",
            id: "haserrorsbygroup-and-haswarningsbygroup",
            children: [],
            level: 2,
          },
          {
            value: "<code>getErrors</code> and <code>getWarnings</code>",
            id: "geterrors-and-getwarnings",
            children: [],
            level: 2,
          },
          {
            value:
              "<code>getErrorsByGroup</code> and <code>getWarningsByGroup</code>",
            id: "geterrorsbygroup-and-getwarningsbygroup",
            children: [],
            level: 2,
          },
          { value: "<code>.done()</code>", id: "done", children: [], level: 2 },
        ],
        p = { toc: u };
      function c(e) {
        var t = e.components,
          n = (0, r.Z)(e, s);
        return (0, i.kt)(
          "wrapper",
          (0, a.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "the-result-object" }, "The Result Object"),
          (0, i.kt)(
            "p",
            null,
            "Vest validations return a results object that holds all the information regarding the current run and methods to interact with the data."
          ),
          (0, i.kt)(
            "p",
            null,
            "A result object would look somewhat like this:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "{\n  'errorCount': 0,          // Overall count of errors in the suite\n  'warnCount': 0,           // Overall count of warnings in the suite\n  'testCount': 0,           // Overall test count for the suite (passing, failing and warning)\n  'tests': {                // An object containing all non-skipped tests\n    ['fieldName']: {        // Name of each field\n      'errorCount': 0,      // Error count per field\n      'errors': [],         // Array of error messages fer field (may be undefined)\n      'warnings': [],       // Array of warning messages fer field (may be undefined)\n      'warnCount': 0,       // Warning count per field\n      'testCount': 0,       // Overall test count for the field (passing, failing and warning)\n    },\n    'groups': {             // An object containing groups declared in the suite\n      ['fieldName']: {      // Subset of res.tests[fieldName]\n        /*... */            // only containing tests that ran within the group\n      }\n    }\n  }\n}\n"
            )
          ),
          (0, i.kt)(
            "h1",
            { id: "result-object-methods" },
            "Result Object methods"
          ),
          (0, i.kt)(
            "p",
            null,
            "Along with this data, our result object also contains a few other methods that can be used to interact with the data:"
          ),
          (0, i.kt)(
            "h2",
            { id: "isvalid" },
            (0, i.kt)("inlineCode", { parentName: "h2" }, "isValid")
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("inlineCode", { parentName: "p" }, "isValid"),
            " returns whether the validation suite as a whole or a single field is valid or not."
          ),
          (0, i.kt)("h3", { id: "suite-validity" }, "Suite validity"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("em", { parentName: "p" }, "suite"),
            " is considered valid if the following conditions are met:"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "There are no errors (",
              (0, i.kt)(
                "inlineCode",
                { parentName: "li" },
                "hasErrors() === false"
              ),
              ") in the suite - warnings are not counted as errors."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "All non ",
              (0, i.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/writing_your_suite/optional_fields",
                },
                "optional"
              ),
              " fields have passing tests."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "There are no pending async tests."
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "result.isValid();\n\nsuite.get().isValid();\n"
            )
          ),
          (0, i.kt)("h3", { id: "field-validity" }, "Field validity"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("em", { parentName: "p" }, "field"),
            " is considered valid if the following conditions are met:"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "The field has no errors (",
              (0, i.kt)(
                "inlineCode",
                { parentName: "li" },
                "hasErrors() === false"
              ),
              ') or the field is omitted via the functional "optional" API.'
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "All non-optional tests for the field are passing."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "The field has no pending tests."
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'result.isValid("username");\n\nsuite.get().isValid("username");\n'
            )
          ),
          (0, i.kt)(
            "div",
            { className: "admonition admonition-tip alert alert--success" },
            (0, i.kt)(
              "div",
              { parentName: "div", className: "admonition-heading" },
              (0, i.kt)(
                "h5",
                { parentName: "div" },
                (0, i.kt)(
                  "span",
                  { parentName: "h5", className: "admonition-icon" },
                  (0, i.kt)(
                    "svg",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "12",
                      height: "16",
                      viewBox: "0 0 12 16",
                    },
                    (0, i.kt)("path", {
                      parentName: "svg",
                      fillRule: "evenodd",
                      d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z",
                    })
                  )
                ),
                "NOTE"
              )
            ),
            (0, i.kt)(
              "div",
              { parentName: "div", className: "admonition-content" },
              (0, i.kt)(
                "p",
                { parentName: "div" },
                "When ",
                (0, i.kt)("inlineCode", { parentName: "p" }, "isValid"),
                " equals ",
                (0, i.kt)("inlineCode", { parentName: "p" }, "false"),
                " it does not necessarily mean that the form is inValid. It only means that might not be valid ",
                (0, i.kt)("em", { parentName: "p" }, "yet"),
                ". For example, if not all the fields are filled, the form is not valid yet, even though it may not be strictly invalid."
              )
            )
          ),
          (0, i.kt)(
            "h2",
            { id: "haserrors-and-haswarnings" },
            (0, i.kt)("inlineCode", { parentName: "h2" }, "hasErrors"),
            " and ",
            (0, i.kt)("inlineCode", { parentName: "h2" }, "hasWarnings")
          ),
          (0, i.kt)(
            "p",
            null,
            "If you only need to know if a certain field has validation errors or warnings but don't really care which they are, you can use ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "hasErrors"),
            " or ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "hasWarnings"),
            " functions."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'resultObject.hasErrors("username");\n// true\n\nresultObject.hasWarnings("password");\n// false\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "In case you want to know whether the whole suite has errors or warnings (to prevent submit, for example), you can use the same functions, just without specifying a field"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "resultObject.hasErrors();\n// true\n\nresultObject.hasWarnings();\n// true\n"
            )
          ),
          (0, i.kt)(
            "h2",
            { id: "haserrorsbygroup-and-haswarningsbygroup" },
            (0, i.kt)("inlineCode", { parentName: "h2" }, "hasErrorsByGroup"),
            " and ",
            (0, i.kt)("inlineCode", { parentName: "h2" }, "hasWarningsByGroup")
          ),
          (0, i.kt)(
            "p",
            null,
            "Similar to ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "hasErrors"),
            " and ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "hasWarnings"),
            ", but returns the result for a specified ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/writing_tests/advanced_test_features/grouping_tests",
              },
              "group"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "To get the result for a given field in the group:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'resultObject.hasErrorsByGroup("groupName", "fieldName");\n// true\n\nresultObject.hasWarningsByGroup("groupName", "fieldName");\n// false\n'
            )
          ),
          (0, i.kt)("p", null, "And to get the result for a whole group."),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'resultObject.hasErrorsByGroup("groupName");\n// true\n\nresultObject.hasWarningsByGroup("groupName");\n// true\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/writing_tests/advanced_test_features/grouping_tests",
              },
              "Read more about groups"
            )
          ),
          (0, i.kt)(
            "h2",
            { id: "geterrors-and-getwarnings" },
            (0, i.kt)("inlineCode", { parentName: "h2" }, "getErrors"),
            " and ",
            (0, i.kt)("inlineCode", { parentName: "h2" }, "getWarnings")
          ),
          (0, i.kt)(
            "p",
            null,
            "These functions return an array of errors for the specified field. If no field is specified, it returns an object with all fields as keys and their error arrays as values."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "resultObject.getErrors(\"username\");\n// ['Username is too short', `Username already exists`]\n\nresultObject.getWarnings(\"password\");\n// ['Password must contain special characters']\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "If there are no errors for the field, the function defaults to an empty array:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'resultObject.getErrors("username");\n// []\n\nresultObject.getWarnings("username");\n// []\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "You can also call these functions without a field name, which will return you an array per field:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "resultObject.getErrors();\n\n// {\n//   username: ['Username is too short', `Username already exists`],\n//   password: ['Password must contain special characters']\n// }\n"
            )
          ),
          (0, i.kt)(
            "div",
            { className: "admonition admonition-tip alert alert--success" },
            (0, i.kt)(
              "div",
              { parentName: "div", className: "admonition-heading" },
              (0, i.kt)(
                "h5",
                { parentName: "div" },
                (0, i.kt)(
                  "span",
                  { parentName: "h5", className: "admonition-icon" },
                  (0, i.kt)(
                    "svg",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "12",
                      height: "16",
                      viewBox: "0 0 12 16",
                    },
                    (0, i.kt)("path", {
                      parentName: "svg",
                      fillRule: "evenodd",
                      d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z",
                    })
                  )
                ),
                "NOTE"
              )
            ),
            (0, i.kt)(
              "div",
              { parentName: "div", className: "admonition-content" },
              (0, i.kt)(
                "p",
                { parentName: "div" },
                "If you did not specify error messages for your tests, your errors array will be empty as well. In such case you should always rely on ",
                (0, i.kt)("inlineCode", { parentName: "p" }, ".hasErrors()"),
                " instead."
              )
            )
          ),
          (0, i.kt)(
            "h2",
            { id: "geterrorsbygroup-and-getwarningsbygroup" },
            (0, i.kt)("inlineCode", { parentName: "h2" }, "getErrorsByGroup"),
            " and ",
            (0, i.kt)("inlineCode", { parentName: "h2" }, "getWarningsByGroup")
          ),
          (0, i.kt)(
            "p",
            null,
            "Just like get ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "getErrors"),
            " and ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "getWarnings"),
            ", but narrows the result to a specified ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/writing_tests/advanced_test_features/grouping_tests",
              },
              "group"
            ),
            "."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "resultObject.getErrorsByGroup('groupName', 'fieldName');\nresultObject.getWarningsByGroup('groupName', 'fieldName');\nresultObject.getErrorsByGroup('groupName'');\nresultObject.getWarningsByGroup('groupName'');\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/writing_tests/advanced_test_features/grouping_tests",
              },
              "Read more about groups"
            ),
            "."
          ),
          (0, i.kt)(
            "h2",
            { id: "done" },
            (0, i.kt)("inlineCode", { parentName: "h2" }, ".done()")
          ),
          (0, i.kt)(
            "p",
            null,
            "Done is a function that can be chained to your validation suite, and allows invoking callbacks whenever one, or all fields, are finished running - regardless of the validation result."
          ),
          (0, i.kt)(
            "p",
            null,
            "If we specify a field name in our ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "done"),
            " call, Vest will not wait for the whole suite to finish before running our callback. It will invoke immediately when all tests with that given name finished running."
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("inlineCode", { parentName: "p" }, ".done()"),
            " calls can be infinitely chained after one another, and as the validation suite completes - they will all run immediately."
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("inlineCode", { parentName: "p" }, "done"),
            " takes one or two arguments:"
          ),
          (0, i.kt)(
            "table",
            null,
            (0, i.kt)(
              "thead",
              { parentName: "table" },
              (0, i.kt)(
                "tr",
                { parentName: "thead" },
                (0, i.kt)("th", { parentName: "tr", align: null }, "Name"),
                (0, i.kt)("th", { parentName: "tr", align: null }, "Type"),
                (0, i.kt)("th", { parentName: "tr", align: null }, "Optional"),
                (0, i.kt)(
                  "th",
                  { parentName: "tr", align: null },
                  "Description"
                )
              )
            ),
            (0, i.kt)(
              "tbody",
              { parentName: "table" },
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, i.kt)("inlineCode", { parentName: "td" }, "fieldName")
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, i.kt)("inlineCode", { parentName: "td" }, "String")
                ),
                (0, i.kt)("td", { parentName: "tr", align: null }, "Yes"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "If passed, the current done call will not wait for the whole suite to complete, but instead wait for a certain field to finish."
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, i.kt)("inlineCode", { parentName: "td" }, "callback")
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  (0, i.kt)("inlineCode", { parentName: "td" }, "Function")
                ),
                (0, i.kt)("td", { parentName: "tr", align: null }, "No"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: null },
                  "A callback to be run when either the whole suite or the specified field finished running."
                )
              )
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "The result object is being passed down to the ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "done"),
            " object as an argument."
          ),
          (0, i.kt)(
            "p",
            null,
            "In the below example, the ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "done"),
            " callback for ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "UserName"),
            " may run before the whole suite finishes. Only when the rest of the suite finishes, it will call the other two done callbacks that do not have a field name specified."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'import { create, test, enforce } from "vest";\n\nconst suite = create((data) => {\n  test(\n    "UserEmail",\n    "Marked as spam address",\n    async () => await isKnownSpammer(data.address)\n  );\n\n  test(\n    "UserName",\n    "must not be blacklisted",\n    async () => await isBlacklistedUser(data.username)\n  );\n});\n\nconst validationResult = suite(data)\n  .done("UserName", (res) => {\n    if (res.hasErrors("UserName")) {\n      showUserNameErrors(res.errors);\n    }\n  })\n  .done((output) => {\n    reportToServer(output);\n  })\n  .done((output) => {\n    promptUserQuestionnaire(output);\n  });\n'
            )
          ),
          (0, i.kt)(
            "div",
            { className: "admonition admonition-danger alert alert--danger" },
            (0, i.kt)(
              "div",
              { parentName: "div", className: "admonition-heading" },
              (0, i.kt)(
                "h5",
                { parentName: "div" },
                (0, i.kt)(
                  "span",
                  { parentName: "h5", className: "admonition-icon" },
                  (0, i.kt)(
                    "svg",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "12",
                      height: "16",
                      viewBox: "0 0 12 16",
                    },
                    (0, i.kt)("path", {
                      parentName: "svg",
                      fillRule: "evenodd",
                      d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z",
                    })
                  )
                ),
                "IMPORTANT"
              )
            ),
            (0, i.kt)(
              "div",
              { parentName: "div", className: "admonition-content" },
              (0, i.kt)(
                "p",
                { parentName: "div" },
                ".done calls must not be used conditionally - especially when involving async tests. This might cause unexpected behavior or missed callbacks. Instead, if needed, perform your conditional logic within your callback."
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              '// \ud83d\udea8 This might not work as expected when working with async validations\n\nif (field === "username") {\n  result.done(() => {\n    /*do something*/\n  });\n}\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              '// \u2705 Instead, perform your checks within your done callback\n\nresult.done(() => {\n  if (field === "username") {\n    /*do something*/\n  }\n});\n'
            )
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
