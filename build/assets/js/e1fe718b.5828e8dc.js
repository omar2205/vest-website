"use strict";
(self.webpackChunkvest_website = self.webpackChunkvest_website || []).push([
  [617],
  {
    3905: function (e, n, a) {
      a.d(n, {
        Zo: function () {
          return p;
        },
        kt: function () {
          return m;
        },
      });
      var t = a(7294);
      function l(e, n, a) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = a),
          e
        );
      }
      function i(e, n) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          n &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            a.push.apply(a, t);
        }
        return a;
      }
      function r(e) {
        for (var n = 1; n < arguments.length; n++) {
          var a = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? i(Object(a), !0).forEach(function (n) {
                l(e, n, a[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : i(Object(a)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(a, n)
                );
              });
        }
        return e;
      }
      function s(e, n) {
        if (null == e) return {};
        var a,
          t,
          l = (function (e, n) {
            if (null == e) return {};
            var a,
              t,
              l = {},
              i = Object.keys(e);
            for (t = 0; t < i.length; t++)
              (a = i[t]), n.indexOf(a) >= 0 || (l[a] = e[a]);
            return l;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (t = 0; t < i.length; t++)
            (a = i[t]),
              n.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]));
        }
        return l;
      }
      var o = t.createContext({}),
        u = function (e) {
          var n = t.useContext(o),
            a = n;
          return e && (a = "function" == typeof e ? e(n) : r(r({}, n), e)), a;
        },
        p = function (e) {
          var n = u(e.components);
          return t.createElement(o.Provider, { value: n }, e.children);
        },
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return t.createElement(t.Fragment, {}, n);
          },
        },
        d = t.forwardRef(function (e, n) {
          var a = e.components,
            l = e.mdxType,
            i = e.originalType,
            o = e.parentName,
            p = s(e, ["components", "mdxType", "originalType", "parentName"]),
            d = u(a),
            m = l,
            h = d["".concat(o, ".").concat(m)] || d[m] || c[m] || i;
          return a
            ? t.createElement(h, r(r({ ref: n }, p), {}, { components: a }))
            : t.createElement(h, r({ ref: n }, p));
        });
      function m(e, n) {
        var a = arguments,
          l = n && n.mdxType;
        if ("string" == typeof e || l) {
          var i = a.length,
            r = new Array(i);
          r[0] = d;
          var s = {};
          for (var o in n) hasOwnProperty.call(n, o) && (s[o] = n[o]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : l),
            (r[1] = s);
          for (var u = 2; u < i; u++) r[u] = a[u];
          return t.createElement.apply(null, r);
        }
        return t.createElement.apply(null, a);
      }
      d.displayName = "MDXCreateElement";
    },
    1087: function (e, n, a) {
      a.r(n),
        a.d(n, {
          frontMatter: function () {
            return s;
          },
          contentTitle: function () {
            return o;
          },
          metadata: function () {
            return u;
          },
          toc: function () {
            return p;
          },
          default: function () {
            return d;
          },
        });
      var t = a(7462),
        l = a(3366),
        i = (a(7294), a(3905)),
        r = ["components"],
        s = { sidebar_position: 2 },
        o = "List of Enforce rules",
        u = {
          unversionedId: "enforce/enforce_rules",
          id: "enforce/enforce_rules",
          isDocsHomePage: !1,
          title: "List of Enforce rules",
          description:
            "Enforce rules are functions that allow you to test your data against different criteria. The following rules are supported out-of-the-box.",
          source: "@site/docs/enforce/enforce_rules.md",
          sourceDirName: "enforce",
          slug: "/enforce/enforce_rules",
          permalink: "/docs/enforce/enforce_rules",
          editUrl:
            "https://github.com/ealush/vest-website/edit/main/docs/enforce/enforce_rules.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "tutorialSidebar",
          previous: { title: "Enforce", permalink: "/docs/enforce/enforce" },
          next: {
            title: "Compound rules",
            permalink: "/docs/enforce/builtin-enforce-plugins/compound_rules",
          },
        },
        p = [
          {
            value: "equals",
            id: "equals",
            children: [
              {
                value: "Description",
                id: "description",
                children: [],
                level: 3,
              },
              { value: "Arguments", id: "arguments", children: [], level: 3 },
              {
                value: "Usage examples:",
                id: "usage-examples",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "notEquals",
            id: "notequals",
            children: [
              {
                value: "Description",
                id: "description-1",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-1",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isEmpty",
            id: "isempty",
            children: [
              {
                value: "Description",
                id: "description-2",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-2",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNotEmpty",
            id: "isnotempty",
            children: [
              {
                value: "Description",
                id: "description-3",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-3",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNumeric",
            id: "isnumeric",
            children: [
              {
                value: "Description",
                id: "description-4",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-4",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNotNumeric",
            id: "isnotnumeric",
            children: [
              {
                value: "Description",
                id: "description-5",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-5",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "greaterThan",
            id: "greaterthan",
            children: [
              {
                value: "Description",
                id: "description-6",
                children: [],
                level: 3,
              },
              { value: "Arguments", id: "arguments-1", children: [], level: 3 },
              { value: "Usage", id: "usage", children: [], level: 3 },
            ],
            level: 2,
          },
          {
            value: "greaterThanOrEquals",
            id: "greaterthanorequals",
            children: [
              {
                value: "Description",
                id: "description-7",
                children: [],
                level: 3,
              },
              { value: "Arguments", id: "arguments-2", children: [], level: 3 },
              { value: "Usage", id: "usage-1", children: [], level: 3 },
            ],
            level: 2,
          },
          {
            value: "lengthEquals",
            id: "lengthequals",
            children: [
              {
                value: "Description",
                id: "description-8",
                children: [],
                level: 3,
              },
              { value: "Arguments", id: "arguments-3", children: [], level: 3 },
              {
                value: "Usage examples:",
                id: "usage-examples-6",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "lengthNotEquals",
            id: "lengthnotequals",
            children: [
              {
                value: "Description",
                id: "description-9",
                children: [],
                level: 3,
              },
              { value: "Arguments", id: "arguments-4", children: [], level: 3 },
              {
                value: "Usage examples:",
                id: "usage-examples-7",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "lessThan",
            id: "lessthan",
            children: [
              {
                value: "Description",
                id: "description-10",
                children: [],
                level: 3,
              },
              { value: "Arguments", id: "arguments-5", children: [], level: 3 },
              { value: "Usage", id: "usage-2", children: [], level: 3 },
            ],
            level: 2,
          },
          {
            value: "lessThanOrEquals",
            id: "lessthanorequals",
            children: [
              {
                value: "Description",
                id: "description-11",
                children: [],
                level: 3,
              },
              { value: "Arguments", id: "arguments-6", children: [], level: 3 },
              { value: "Usage", id: "usage-3", children: [], level: 3 },
            ],
            level: 2,
          },
          {
            value: "longerThan",
            id: "longerthan",
            children: [
              {
                value: "Description",
                id: "description-12",
                children: [],
                level: 3,
              },
              { value: "Arguments", id: "arguments-7", children: [], level: 3 },
              {
                value: "Usage examples:",
                id: "usage-examples-8",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "longerThanOrEquals",
            id: "longerthanorequals",
            children: [
              {
                value: "Description",
                id: "description-13",
                children: [],
                level: 3,
              },
              { value: "Arguments", id: "arguments-8", children: [], level: 3 },
              {
                value: "Usage examples:",
                id: "usage-examples-9",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "numberEquals",
            id: "numberequals",
            children: [
              {
                value: "Description",
                id: "description-14",
                children: [],
                level: 3,
              },
              { value: "Arguments", id: "arguments-9", children: [], level: 3 },
              { value: "Usage", id: "usage-4", children: [], level: 3 },
            ],
            level: 2,
          },
          {
            value: "numberNotEquals",
            id: "numbernotequals",
            children: [
              {
                value: "Description",
                id: "description-15",
                children: [],
                level: 3,
              },
              {
                value: "Arguments",
                id: "arguments-10",
                children: [],
                level: 3,
              },
              { value: "Usage", id: "usage-5", children: [], level: 3 },
            ],
            level: 2,
          },
          {
            value: "shorterThan",
            id: "shorterthan",
            children: [
              {
                value: "Description",
                id: "description-16",
                children: [],
                level: 3,
              },
              {
                value: "Arguments",
                id: "arguments-11",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-10",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "shorterThanOrEquals",
            id: "shorterthanorequals",
            children: [
              {
                value: "Description",
                id: "description-17",
                children: [],
                level: 3,
              },
              {
                value: "Arguments",
                id: "arguments-12",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-11",
                children: [
                  {
                    value: "Passing examples:",
                    id: "passing-examples",
                    children: [],
                    level: 4,
                  },
                ],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "matches",
            id: "matches",
            children: [
              {
                value: "Description",
                id: "description-18",
                children: [],
                level: 3,
              },
              {
                value: "Arguments",
                id: "arguments-13",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-12",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "notMatches",
            id: "notmatches",
            children: [
              {
                value: "Description",
                id: "description-19",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-13",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "inside",
            id: "inside",
            children: [
              {
                value: "Description",
                id: "description-20",
                children: [],
                level: 3,
              },
              {
                value: "Arguments",
                id: "arguments-14",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-14",
                children: [
                  {
                    value: "inside: array",
                    id: "inside-array",
                    children: [],
                    level: 4,
                  },
                  {
                    value: "inside: string",
                    id: "inside-string",
                    children: [],
                    level: 4,
                  },
                ],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "notInside",
            id: "notinside",
            children: [
              {
                value: "Description",
                id: "description-21",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-15",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isTruthy",
            id: "istruthy",
            children: [
              {
                value: "Description",
                id: "description-22",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-16",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isFalsy",
            id: "isfalsy",
            children: [
              {
                value: "Description",
                id: "description-23",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-17",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isArray",
            id: "isarray",
            children: [
              {
                value: "Description",
                id: "description-24",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-18",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNotArray",
            id: "isnotarray",
            children: [
              {
                value: "Description",
                id: "description-25",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-19",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isBoolean",
            id: "isboolean",
            children: [
              {
                value: "Description",
                id: "description-26",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-20",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNotBoolean",
            id: "isnotboolean",
            children: [
              {
                value: "Description",
                id: "description-27",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-21",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isBlank",
            id: "isblank",
            children: [
              {
                value: "Description",
                id: "description-28",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-22",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNotBlank",
            id: "isnotblank",
            children: [
              {
                value: "Description",
                id: "description-29",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-23",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNumber",
            id: "isnumber",
            children: [
              {
                value: "Description",
                id: "description-30",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-24",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNotNumber",
            id: "isnotnumber",
            children: [
              {
                value: "Description",
                id: "description-31",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-25",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNaN",
            id: "isnan",
            children: [
              {
                value: "Description",
                id: "description-32",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-26",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNotNaN",
            id: "isnotnan",
            children: [
              {
                value: "Description",
                id: "description-33",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-27",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNull",
            id: "isnull",
            children: [
              {
                value: "Description",
                id: "description-34",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-28",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNotNull",
            id: "isnotnull",
            children: [
              {
                value: "Description",
                id: "description-35",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-29",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isString",
            id: "isstring",
            children: [
              {
                value: "Description",
                id: "description-36",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-30",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNotString",
            id: "isnotstring",
            children: [
              {
                value: "Description",
                id: "description-37",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-31",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isUndefined",
            id: "isundefined",
            children: [
              {
                value: "Description",
                id: "description-38",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-32",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isOdd",
            id: "isodd",
            children: [
              {
                value: "Description",
                id: "description-39",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-33",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isEven",
            id: "iseven",
            children: [
              {
                value: "Description",
                id: "description-40",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-34",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isBetween",
            id: "isbetween",
            children: [
              {
                value: "Description",
                id: "description-41",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-35",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNotBetween",
            id: "isnotbetween",
            children: [
              {
                value: "Description",
                id: "description-42",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-36",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "endsWith",
            id: "endswith",
            children: [
              {
                value: "Description",
                id: "description-43",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-37",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "doesNotEndWith",
            id: "doesnotendwith",
            children: [
              {
                value: "Description",
                id: "description-44",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "startsWith",
            id: "startswith",
            children: [
              {
                value: "Description",
                id: "description-45",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-38",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "doesNotStartWith",
            id: "doesnotstartwith",
            children: [
              {
                value: "Description",
                id: "description-46",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-39",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isNegative",
            id: "isnegative",
            children: [
              {
                value: "Description",
                id: "description-47",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-40",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
          {
            value: "isPositive",
            id: "ispositive",
            children: [
              {
                value: "Description",
                id: "description-48",
                children: [],
                level: 3,
              },
              {
                value: "Usage examples:",
                id: "usage-examples-41",
                children: [],
                level: 3,
              },
            ],
            level: 2,
          },
        ],
        c = { toc: p };
      function d(e) {
        var n = e.components,
          a = (0, l.Z)(e, r);
        return (0, i.kt)(
          "wrapper",
          (0, t.Z)({}, c, a, { components: n, mdxType: "MDXLayout" }),
          (0, i.kt)(
            "h1",
            { id: "list-of-enforce-rules" },
            "List of Enforce rules"
          ),
          (0, i.kt)(
            "p",
            null,
            "Enforce rules are functions that allow you to test your data against different criteria. The following rules are supported out-of-the-box."
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("a", { parentName: "li", href: "#equals" }, "equals")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#notequals" },
                "notEquals"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("a", { parentName: "li", href: "#isempty" }, "isEmpty")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isnotempty" },
                "isNotEmpty"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isnumeric" },
                "isNumeric"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isnotnumeric" },
                "isNotNumeric"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#greaterthan" },
                "greaterThan"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#greaterthanorequals" },
                "greaterThanOrEquals"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#lengthequals" },
                "lengthEquals"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#lengthnotequals" },
                "lengthNotEquals"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#lessthan" },
                "lessThan"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#lessthanorequals" },
                "lessThanOrEquals"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#longerthan" },
                "longerThan"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#longerthanorequals" },
                "longerThanOrEquals"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#numberequals" },
                "numberEquals"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#numbernotequals" },
                "numberNotEquals"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#shorterthan" },
                "shorterThan"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#shorterthanorequals" },
                "shorterThanOrEquals"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("a", { parentName: "li", href: "#matches" }, "matches")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#notmatches" },
                "notMatches"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("a", { parentName: "li", href: "#inside" }, "inside")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#notinside" },
                "notInside"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#istruthy" },
                "isTruthy"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("a", { parentName: "li", href: "#isfalsy" }, "isFalsy")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("a", { parentName: "li", href: "#isarray" }, "isArray")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isnotarray" },
                "isNotArray"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isboolean" },
                "isBoolean"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isnotboolean" },
                "isNotBoolean"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("a", { parentName: "li", href: "#isblank" }, "isBlank")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isnotblank" },
                "isNotBlank"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isnumber" },
                "isNumber"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isnotnumber" },
                "isNotNumber"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("a", { parentName: "li", href: "#isNaN" }, "isNaN")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isNotNaN" },
                "isNotNaN"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("a", { parentName: "li", href: "#isnull" }, "isNull")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isnotnull" },
                "isNotNull"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isstring" },
                "isString"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isnotstring" },
                "isNotString"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isundefined" },
                "isUndefined"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("a", { parentName: "li", href: "#isodd" }, "isOdd")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("a", { parentName: "li", href: "#iseven" }, "isEven")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isbetween" },
                "isBetween"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isnotbetween" },
                "isNotBetween"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#endswith" },
                "endsWith"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#doesnotendwith" },
                "doesNotEndWith"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#startsWith" },
                "startsWith"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#doesnotstartwith" },
                "doesNotStartWith"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#isnegative" },
                "isNegative"
              )
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                { parentName: "li", href: "#ispositive" },
                "isPositive"
              )
            )
          ),
          (0, i.kt)("h2", { id: "equals" }, "equals"),
          (0, i.kt)("h3", { id: "description" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if your enforced value ",
            (0, i.kt)(
              "a",
              {
                href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using",
                target: "_blank",
              },
              "strictly equals"
            ),
            " (",
            (0, i.kt)("inlineCode", { parentName: "p" }, "==="),
            ") another."
          ),
          (0, i.kt)(
            "p",
            null,
            "It is not recommended to use this rule to compare arrays or objects, as it does not perform any sort of deep comparison on the value."
          ),
          (0, i.kt)(
            "p",
            null,
            "For numeric value comparison, you should use ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "numberEquals"),
            ", which coerces numeric strings into numbers before comparing."
          ),
          (0, i.kt)("h3", { id: "arguments" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "value"),
              ": Any value you wish to check your enforced value against"
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(1).equals(1);\n\nenforce("hello").equals("hello");\n\nconst a = [1, 2, 3];\n\nenforce(a).equals(a);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("1").equals(1);\nenforce([1, 2, 3]).equals([1, 2, 3]);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "notequals" }, "notEquals"),
          (0, i.kt)("h3", { id: "description-1" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if your enforced value does not ",
            (0, i.kt)(
              "a",
              {
                href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using",
                target: "_blank",
              },
              "strictly equal"
            ),
            " (",
            (0, i.kt)("inlineCode", { parentName: "p" }, "==="),
            ") another."
          ),
          (0, i.kt)(
            "p",
            null,
            "Reverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "equals"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-1" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("1").notEquals(1);\nenforce([1, 2, 3]).notEquals([1, 2, 3]);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(1).notEquals(1);\nenforce("hello").notEquals("hello");\n\nconst a = [1, 2, 3];\n\nenforce(a).notEquals(a);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isempty" }, "isEmpty"),
          (0, i.kt)("h3", { id: "description-2" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if your enforced value is empty, false, zero, null or undefined."
          ),
          (0, i.kt)("p", null, "Expected results are:"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "object: checks against the count of keys (",
              (0, i.kt)("inlineCode", { parentName: "li" }, "0"),
              " is empty)"
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "array/string: checks against length. (",
              (0, i.kt)("inlineCode", { parentName: "li" }, "0"),
              " is empty)"
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "number: checks the value of the number. (",
              (0, i.kt)("inlineCode", { parentName: "li" }, "0"),
              " and ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "NaN"),
              " are empty)"
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "boolean: ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "false"),
              " is empty."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "undefined/null: are both empty."
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-2" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([]).isEmpty();\nenforce("").isEmpty();\nenforce({}).isEmpty();\nenforce(0).isEmpty();\nenforce(NaN).isEmpty();\nenforce(undefined).isEmpty();\nenforce(null).isEmpty();\nenforce(false).isEmpty();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1]).isEmpty();\nenforce("1").isEmpty();\nenforce({ 1: 1 }).isEmpty();\nenforce(1).isEmpty();\nenforce(true).isEmpty();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnotempty" }, "isNotEmpty"),
          (0, i.kt)("h3", { id: "description-3" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your enforced value is not empty, false, or zero.\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "isEmpty"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-3" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1]).isNotEmpty();\nenforce("1").isNotEmpty();\nenforce({ 1: 1 }).isNotEmpty();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([]).isNotEmpty();\nenforce("").isNotEmpty();\nenforce({}).isNotEmpty();\nenforce(0).isNotEmpty();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnumeric" }, "isNumeric"),
          (0, i.kt)("h3", { id: "description-4" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value is a representation of a real number"
          ),
          (0, i.kt)("h3", { id: "usage-examples-4" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(143).isNumeric();\nenforce("143").isNumeric();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(NaN).isNumeric();\nenforce("1hello").isNumeric();\nenforce("hi").isNumeric();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnotnumeric" }, "isNotNumeric"),
          (0, i.kt)("h3", { id: "description-5" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value is not a representation of a real number.\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "isNumeric"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-5" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(NaN).isNotNumeric();\nenforce("Hello World!").isNotNumeric();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(731).isNotNumeric();\nenforce("42").isNotNumeric();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "greaterthan" }, "greaterThan"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "alias: ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "gt")
            )
          ),
          (0, i.kt)("h3", { id: "description-6" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your numeric enforced value is larger than a given numeric value."
          ),
          (0, i.kt)("h3", { id: "arguments-1" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "value"),
              ": ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "number | string"),
              " | A numeric value against which you want to check your enforced value."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Strings are parsed using ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "Number()"),
            ", values which are not fully numeric always return false;"
          ),
          (0, i.kt)("h3", { id: "usage" }, "Usage"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(1).greaterThan(0);\nenforce("10").greaterThan(0);\nenforce(900).gt("100");\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(100).greaterThan(100);\nenforce("100").greaterThan(110);\nenforce([100]).gt(1);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "greaterthanorequals" }, "greaterThanOrEquals"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "alias: ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "gte()")
            )
          ),
          (0, i.kt)("h3", { id: "description-7" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your numeric enforced value is larger than or equals a given numeric value."
          ),
          (0, i.kt)("h3", { id: "arguments-2" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "value"),
              ": ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "number | string"),
              " | A numeric value against which you want to check your enforced value."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Strings are parsed using ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "Number()"),
            ", values which are not fully numeric always return false;"
          ),
          (0, i.kt)("h3", { id: "usage-1" }, "Usage"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(1).greaterThanOrEquals(0);\nenforce("10").greaterThanOrEquals(0);\nenforce(900).greaterThanOrEquals("100");\nenforce(100).greaterThanOrEquals("100");\nenforce(900).gte("900");\nenforce("1337").gte(1337);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(100).greaterThanOrEquals("120");\nenforce("100").greaterThanOrEquals(110);\nenforce([100]).gte(1);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "lengthequals" }, "lengthEquals"),
          (0, i.kt)("h3", { id: "description-8" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your enforced value is equal to the given number."
          ),
          (0, i.kt)("h3", { id: "arguments-3" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "size"),
              ": ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "number"),
              " | the number which you would like your initial value to be tested against."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "The ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "value"),
            " argument can be of the following types:"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "array: checks against length."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "string: checks against length."
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-6" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1]).lengthEquals(1);\nenforce("a").lengthEquals(1);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1, 2]).lengthEquals(1);\nenforce("").lengthEquals(1);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "lengthnotequals" }, "lengthNotEquals"),
          (0, i.kt)("h3", { id: "description-9" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your enforced value is not equal to the given number.\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "lengthEquals"),
            "."
          ),
          (0, i.kt)("h3", { id: "arguments-4" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "size"),
              ": ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "number"),
              " | the number which you would like your initial value to be tested against."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "The ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "value"),
            " argument can be of the following types:"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "array: checks against length."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "string: checks against length."
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-7" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1]).lengthNotEquals(0);\nenforce("a").lengthNotEquals(3);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1]).lengthNotEquals(1);\nenforce("").lengthNotEquals(0);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "lessthan" }, "lessThan"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "alias: ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "lt()")
            )
          ),
          (0, i.kt)("h3", { id: "description-10" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your numeric enforced value is smaller than a given numeric value."
          ),
          (0, i.kt)("h3", { id: "arguments-5" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "value"),
              ": ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "number | string"),
              " | A numeric value against which you want to check your enforced value."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Strings are parsed using ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "Number()"),
            ", values which are not fully numeric always return false;"
          ),
          (0, i.kt)("h3", { id: "usage-2" }, "Usage"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(0).lessThan(1);\nenforce(2).lessThan("10");\nenforce("90").lt(100);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(100).lessThan(100);\nenforce("110").lessThan(100);\nenforce([0]).lt(1);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "lessthanorequals" }, "lessThanOrEquals"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "alias: ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "lte()")
            )
          ),
          (0, i.kt)("h3", { id: "description-11" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your numeric enforced value is smaller than or equals a given numeric value."
          ),
          (0, i.kt)("h3", { id: "arguments-6" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "value"),
              ": ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "number | string"),
              " | A numeric value against which you want to check your enforced value."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Strings are parsed using ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "Number()"),
            ", values which are not fully numeric always return false;"
          ),
          (0, i.kt)("h3", { id: "usage-3" }, "Usage"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(0).lessThanOrEquals(1);\nenforce(2).lessThanOrEquals("10");\nenforce("90").lte(100);\nenforce(100).lte("100");\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(100).lessThanOrEquals(90);\nenforce("110").lessThanOrEquals(100);\nenforce([0]).lte(1);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "longerthan" }, "longerThan"),
          (0, i.kt)("h3", { id: "description-12" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your enforced value is longer than a given number."
          ),
          (0, i.kt)("h3", { id: "arguments-7" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "size"),
              ": ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "number"),
              " | the number which you would like your initial value to be tested against."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "The ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "value"),
            " argument can be of the following types:"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "array: checks against length."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "string: checks against length."
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-8" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1]).longerThan(0);\nenforce("ab").longerThan(1);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1]).longerThan(2);\nenforce("").longerThan(0);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "longerthanorequals" }, "longerThanOrEquals"),
          (0, i.kt)("h3", { id: "description-13" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your enforced value is longer than or equals a given number."
          ),
          (0, i.kt)("h3", { id: "arguments-8" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "size"),
              ": ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "number"),
              " | the number which you would like your initial value to be tested against."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "The ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "value"),
            " argument can be of the following types:"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "array: checks against length."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "string: checks against length."
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-9" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1]).longerThanOrEquals(0);\nenforce("ab").longerThanOrEquals(1);\nenforce([1]).longerThanOrEquals(1);\nenforce("a").longerThanOrEquals(1);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1]).longerThanOrEquals(2);\nenforce("").longerThanOrEquals(1);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "numberequals" }, "numberEquals"),
          (0, i.kt)("h3", { id: "description-14" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your numeric enforced value is equals another value."
          ),
          (0, i.kt)("h3", { id: "arguments-9" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "value"),
              ": ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "number | string"),
              " | A numeric value against which you want to check your enforced value."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Strings are parsed using ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "Number()"),
            ", values which are not fully numeric always return false;"
          ),
          (0, i.kt)("h3", { id: "usage-4" }, "Usage"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(0).numberEquals(0);\nenforce(2).numberEquals("2");\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(100).numberEquals(10);\nenforce("110").numberEquals(100);\nenforce([0]).numberEquals(1);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "numbernotequals" }, "numberNotEquals"),
          (0, i.kt)("h3", { id: "description-15" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your numeric enforced value does not equal another value.\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "numberEquals"),
            "."
          ),
          (0, i.kt)("h3", { id: "arguments-10" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "value"),
              ": ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "number | string"),
              " | A numeric value against which you want to check your enforced value."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Strings are parsed using ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "Number()"),
            ", values which are not fully numeric always return false;"
          ),
          (0, i.kt)("h3", { id: "usage-5" }, "Usage"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(2).numberNotEquals(0);\nenforce("11").numberNotEquals("10");\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(100).numberNotEquals(100);\nenforce("110").numberNotEquals(100);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "shorterthan" }, "shorterThan"),
          (0, i.kt)("h3", { id: "description-16" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your enforced value is shorter than a given number."
          ),
          (0, i.kt)("h3", { id: "arguments-11" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "size"),
              ": ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "number"),
              " | the number which you would like your initial value to be tested against."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "The ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "value"),
            " argument can be of the following types:"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "array: checks against length."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "string: checks against length."
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-10" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([]).shorterThan(1);\nenforce("a").shorterThan(2);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1]).shorterThan(0);\nenforce("").shorterThan(0);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "shorterthanorequals" }, "shorterThanOrEquals"),
          (0, i.kt)("h3", { id: "description-17" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks that your enforced value is shorter than or equals a given number."
          ),
          (0, i.kt)("h3", { id: "arguments-12" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "size"),
              ": ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "number"),
              " | the number which you would like your initial value to be tested against."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "The ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "value"),
            " argument can be of the following types:"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "array: checks against length."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "string: checks against length."
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-11" }, "Usage examples:"),
          (0, i.kt)("h4", { id: "passing-examples" }, "Passing examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([]).shorterThanOrEquals(1);\nenforce("a").shorterThanOrEquals(2);\nenforce([]).shorterThanOrEquals(0);\nenforce("a").shorterThanOrEquals(1);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([1]).shorterThanOrEquals(0);\nenforce("ab").shorterThanOrEquals(1);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "matches" }, "matches"),
          (0, i.kt)("h3", { id: "description-18" }, "Description"),
          (0, i.kt)("p", null, "Checks if a value contains a regex match."),
          (0, i.kt)("h3", { id: "arguments-13" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "regexp"),
              ": either a ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "RegExp"),
              " object, or a RegExp valid string"
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-12" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(1984).matches(/[0-9]/);\nenforce(1984).matches("[0-9]");\nenforce("1984").matches(/[0-9]/);\nenforce("1984").matches("[0-9]");\nenforce("198four").matches(/[0-9]/);\nenforce("198four").matches("[0-9]");\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("ninety eighty four").matches(/[0-9]/);\nenforce("ninety eighty four").matches("[0-9]");\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "notmatches" }, "notMatches"),
          (0, i.kt)("h3", { id: "description-19" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value does not contain a regex match.\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "matches"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-13" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(1984).notMatches(/[0-9]/);\n// throws\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("ninety eighty four").notMatches("[0-9]");\n// passes\n'
            )
          ),
          (0, i.kt)("h2", { id: "inside" }, "inside"),
          (0, i.kt)("h3", { id: "description-20" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if your enforced value is contained in another array or string.\nYour enforced value can be of the following types:"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "string")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "number")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "boolean")
            )
          ),
          (0, i.kt)("h3", { id: "arguments-14" }, "Arguments"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "container"),
              ": a ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "string"),
              " or an ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "array"),
              " which may contain the value specified."
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-14" }, "Usage examples:"),
          (0, i.kt)("h4", { id: "inside-array" }, "inside: array"),
          (0, i.kt)("p", null, "Checks for membership in an array."),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "string: checks if a string is an element in an array"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("hello").inside(["hello", "world"]);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("hello!").inside(["hello", "world"]);\n// throws\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "number: checks if a number is an element in an array"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(1).inside([1, 2]);\n// passes\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(3).inside([1, 2]);\n// throws\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "boolean: checks if a number is an element in an array"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(false).inside([true, false]);\n// passes\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(true).inside([1, 2, 3]);\n// throws\n"
            )
          ),
          (0, i.kt)("h4", { id: "inside-string" }, "inside: string"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "string: checks if a string is inside another string"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("da").inside("tru dat.");\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("ad").inside("tru dat.");\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "notinside" }, "notInside"),
          (0, i.kt)("h3", { id: "description-21" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a given value is not contained in another array or string.\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "inside"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-15" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("ad").notInside("tru dat.");\nenforce("hello!").notInside(["hello", "world"]);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("hello").notInside(["hello", "world"]);\nenforce("da").notInside("tru dat.");\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "istruthy" }, "isTruthy"),
          (0, i.kt)("h3", { id: "description-22" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value is truthy; Meaning: if it can be coerced into boolean ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "true"),
            ".\nAnything not in the following list is considered to be truthy."
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "undefined")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "null")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "false")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "0")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "NaN")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "empty string (",
              (0, i.kt)("inlineCode", { parentName: "li" }, '""'),
              ")"
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-16" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("hello").isTruthy();\nenforce(true).isTruthy();\nenforce(1).isTruthy();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(false).isTruthy();\nenforce(null).isTruthy();\nenforce(undefined).isTruthy();\nenforce(0).isTruthy();\nenforce(NaN).isTruthy();\nenforce("").isTruthy();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isfalsy" }, "isFalsy"),
          (0, i.kt)("h3", { id: "description-23" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value is falsy; Meaning: if it can be coerced into boolean ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "false"),
            ".\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "isTruthy"),
            "."
          ),
          (0, i.kt)(
            "p",
            null,
            "Anything not in the following list is considered to be truthy:"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "undefined")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "null")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "false")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "0")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "NaN")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "empty string (",
              (0, i.kt)("inlineCode", { parentName: "li" }, '""'),
              ")"
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-17" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(false).isFalsy();\nenforce(0).isFalsy();\nenforce(undefined).isFalsy();\n// passes\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(1).isFalsy();\nenforce(true).isFalsy();\nenforce("hi").isFalsy();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isarray" }, "isArray"),
          (0, i.kt)("h3", { id: "description-24" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value is of type ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "Array"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-18" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(["hello"]).isArray();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("hello").isArray();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnotarray" }, "isNotArray"),
          (0, i.kt)("h3", { id: "description-25" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value is of any type other than ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "Array"),
            ".\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "isArray"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-19" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(["hello"]).isNotArray();\n// throws\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("hello").isNotArray();\n// passes\n'
            )
          ),
          (0, i.kt)("h2", { id: "isboolean" }, "isBoolean"),
          (0, i.kt)("h3", { id: "description-26" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value is of type ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "boolean"),
            ".\nEquals ",
            (0, i.kt)(
              "inlineCode",
              { parentName: "p" },
              "typeof value === 'boolean'"
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-20" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(true).isBoolean();\nenforce(false).isBoolean();\nenforce(!!0).isBoolean();\n// passes\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([]).isBoolean();\nenforce("143").isBoolean();\nenforce("false").isBoolean();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnotboolean" }, "isNotBoolean"),
          (0, i.kt)("h3", { id: "description-27" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value is of any type other than ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "boolean"),
            ".\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "isBoolean"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-21" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("143").isNotBoolean();\nenforce(143).isNotBoolean();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(true).isNotBoolean();\nenforce(false).isNotBoolean();\n// throws\n"
            )
          ),
          (0, i.kt)("h2", { id: "isblank" }, "isBlank"),
          (0, i.kt)("h3", { id: "description-28" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Determines wheter an enforced string contains only whitespaces"
          ),
          (0, i.kt)("h3", { id: "usage-examples-22" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("   ").isBlank(); // passes\nenforce("not blank").isBlank(); // throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnotblank" }, "isNotBlank"),
          (0, i.kt)("h3", { id: "description-29" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Determines wheter an enforced string contains at least a non-whitespace character"
          ),
          (0, i.kt)("h3", { id: "usage-examples-23" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("not blank").isNotBlank(); // passes\nenforce("   ").isNotBlank(); // throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnumber" }, "isNumber"),
          (0, i.kt)("h3", { id: "description-30" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value is of type ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "number"),
            ".\nEquals ",
            (0, i.kt)(
              "inlineCode",
              { parentName: "p" },
              "typeof value === 'number'"
            )
          ),
          (0, i.kt)("h3", { id: "usage-examples-24" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(143).isNumber();\nenforce(NaN).isNumber(); // (NaN is of type 'number!')\n// passes\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce([]).isNumber();\nenforce("143").isNumber();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnotnumber" }, "isNotNumber"),
          (0, i.kt)("h3", { id: "description-31" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value is of any type other than ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "number"),
            ".\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "isNumber"),
            "."
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "note"),
            " isNotNumber does not check for ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "NaN"),
            " value. For NaN values, use ",
            (0, i.kt)("a", { parentName: "p", href: "#isNaN" }, "isNaN"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-25" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("143").isNotNumber();\nenforce(143).isNotNumber();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(143).isNotNumber();\nenforce(NaN).isNotNumber(); // throws (NaN is of type 'number!')\n// throws\n"
            )
          ),
          (0, i.kt)("h2", { id: "isnan" }, "isNaN"),
          (0, i.kt)("h3", { id: "description-32" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "A wrapper around JavaScripts Number.isNaN() function. Checks if a value is NaN."
          ),
          (0, i.kt)("h3", { id: "usage-examples-26" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(NaN).isNaN();\nenforce("A" / "B").isNaN();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(null * null).isNaN(); // null*null = 0\nenforce(200).isNaN();\nenforce("1984").isNaN();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnotnan" }, "isNotNaN"),
          (0, i.kt)("h3", { id: "description-33" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Reverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "isNaN"),
            ". Checks that a value is not NaN."
          ),
          (0, i.kt)("h3", { id: "usage-examples-27" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(null * null).isNaN(); // null*null = 0\nenforce(200).isNaN();\nenforce("1984").isNaN();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(NaN).isNaN();\nenforce("A" / "B").isNaN();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnull" }, "isNull"),
          (0, i.kt)("h3", { id: "description-34" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Enforces that a specified value is ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "null"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-28" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(null).isNull();\n// passes\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(undefined).isNull();\nenforce(true).isNull();\n// throws\n"
            )
          ),
          (0, i.kt)("h2", { id: "isnotnull" }, "isNotNull"),
          (0, i.kt)("h3", { id: "description-35" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Reverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "isNull"),
            ". Checks that a value is not null."
          ),
          (0, i.kt)("h3", { id: "usage-examples-29" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("hello").isNull();\nenforce(200).isNull();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(null).isNull();\n// throws\n"
            )
          ),
          (0, i.kt)("h2", { id: "isstring" }, "isString"),
          (0, i.kt)("h3", { id: "description-36" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value is of type ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "String"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-30" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("hello").isString();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(["hello"]).isString();\nenforce(1984).isString();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnotstring" }, "isNotString"),
          (0, i.kt)("h3", { id: "description-37" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a value is of any type other than ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "String"),
            ".\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "isString"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-31" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("hello").isNotString();\n// throws\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(["hello"]).isNotString();\n// passes\n'
            )
          ),
          (0, i.kt)("h2", { id: "isundefined" }, "isUndefined"),
          (0, i.kt)("h3", { id: "description-38" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Enforces that a given value is (",
            (0, i.kt)("inlineCode", { parentName: "p" }, "==="),
            ") undefined."
          ),
          (0, i.kt)("h3", { id: "usage-examples-32" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce().isUndefined();\nenforce(undefined).isUndefined();\n// passes\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(null).isUndefined();\nenforce(true).isUndefined();\n// throws\n"
            )
          ),
          (0, i.kt)("h2", { id: "isodd" }, "isOdd"),
          (0, i.kt)("h3", { id: "description-39" }, "Description"),
          (0, i.kt)("p", null, "Checks if a value is an odd numeric value."),
          (0, i.kt)("h3", { id: "usage-examples-33" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("1").isOdd();\nenforce(9).isOdd();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(2).isOdd();\nenforce("4").isOdd();\nenforce("1withNumber").isOdd();\nenforce([1]).isOdd();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "iseven" }, "isEven"),
          (0, i.kt)("h3", { id: "description-40" }, "Description"),
          (0, i.kt)("p", null, "Checks if a value is an even numeric value."),
          (0, i.kt)("h3", { id: "usage-examples-34" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(0).isEven();\nenforce("2").isEven();\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(1).isEven();\nenforce("3").isEven();\nenforce("2withNumber").isEven();\nenforce([0]).isEven();\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isbetween" }, "isBetween"),
          (0, i.kt)("h3", { id: "description-41" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a number is in the range of two numbers (edges of range included)"
          ),
          (0, i.kt)("h3", { id: "usage-examples-35" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(5).isBetween(0, 5);\nenforce(5).isBetween(0, 10);\nenforce(-5).isBetween(-10, -1);\nenforce(-5.5).isBetween(-10, -1);\nenforce(-5.5).isBetween(-10, -1.1);\nenforce(-5.5).isBetween(-9.5, -1.1);\n// passes\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(5).isBetween(0, 2);\nenforce(-5).isBetween(0, 2);\nenforce("some_string").isBetween(0, 2);\nenforce(false).isBetween(0, 2);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnotbetween" }, "isNotBetween"),
          (0, i.kt)("h3", { id: "description-42" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Checks if a number ",
            (0, i.kt)("strong", { parentName: "p" }, "is not"),
            " in range of two numbers (edges of range excluded)"
          ),
          (0, i.kt)("h3", { id: "usage-examples-36" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              "enforce(5).isNotBetween(0, 4);\nenforce(5).isNotBetween(0, 10);\nenforce(-5).isNotBetween(-10, -1);\nenforce(-5.5).isNotBetween(-10, -1);\nenforce(-5.5).isNotBetween(-10, -1.1);\n// passes\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(5).isNotBetween(0, 5);\nenforce(5).isNotBetween(0, 10);\nenforce(-5).isNotBetween(-10, -1);\nenforce(-5).isNotBetween(-5, -1);\nenforce("some_string").isNotBetween(0, 2);\nenforce(false).isNotBetween(0, 2);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "endswith" }, "endsWith"),
          (0, i.kt)("h3", { id: "description-43" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Determines whether a string ends with the characters of a specified string."
          ),
          (0, i.kt)("h3", { id: "usage-examples-37" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("aba").endsWith("ba");\nenforce("some_string").endsWith("_string");\nenforce("string with spaces").endsWith("ng with spaces");\nenforce("aaaa     ").endsWith(" ");\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("for").endsWith("tor");\nenforce("aaaab").endsWith("aaaa");\nenforce("aa").endsWith("aaa");\nenforce(42).endsWith("b");\nenforce(42).endsWith(50);\nenforce(true).endsWith(100);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "doesnotendwith" }, "doesNotEndWith"),
          (0, i.kt)("h3", { id: "description-44" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Determines whether a string does not end with the characters of a specified string.\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "endsWith"),
            "."
          ),
          (0, i.kt)("h2", { id: "startswith" }, "startsWith"),
          (0, i.kt)("h3", { id: "description-45" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Determines whether a string starts with the characters of a specified string."
          ),
          (0, i.kt)("h3", { id: "usage-examples-38" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("aba").startsWith("ab");\nenforce("some_string").startsWith("some_");\nenforce("string with spaces").startsWith("string with s");\nenforce("aaaa     ").startsWith("aaaa ");\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("for").startsWith("tor");\nenforce("aaaab").startsWith("aab");\nenforce("aa").startsWith("aaa");\nenforce(42).startsWith("b");\nenforce(42).startsWith(50);\nenforce(true).startsWith(100);\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "doesnotstartwith" }, "doesNotStartWith"),
          (0, i.kt)("h3", { id: "description-46" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Determines whether a string does not start with the characters of a specified string.\nReverse implementation of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "startsWith"),
            "."
          ),
          (0, i.kt)("h3", { id: "usage-examples-39" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("for").doesNotStartWith("tor");\nenforce("aaaab").doesNotStartWith("aab");\nenforce("aa").doesNotStartWith("aaa");\nenforce(42).doesNotStartWith("b");\nenforce(42).doesNotStartWith(50);\nenforce(true).doesNotStartWith(100);\n// passes\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce("aba").doesNotStartWith("ab");\nenforce("some_string").doesNotStartWith("some_");\nenforce("string with spaces").doesNotStartWith("string with s");\nenforce("aaaa     ").doesNotStartWith("aaaa ");\n// throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "isnegative" }, "isNegative"),
          (0, i.kt)("h3", { id: "description-47" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Determines whether a numeric value is negative or not."
          ),
          (0, i.kt)("h3", { id: "usage-examples-40" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(-10).isNegative(); //passes\nenforce(-10.12).isNegative(); //passes\nenforce("-10.12").isNegative(); //passes\nenforce(10).isNegative(); // throws\nenforce("10").isNegative(); // throws\n'
            )
          ),
          (0, i.kt)("h2", { id: "ispositive" }, "isPositive"),
          (0, i.kt)("h3", { id: "description-48" }, "Description"),
          (0, i.kt)(
            "p",
            null,
            "Determines whether a numeric value is positive or not."
          ),
          (0, i.kt)("h3", { id: "usage-examples-41" }, "Usage examples:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'enforce(10).isPositive(); //passes\nenforce(10.12).isPositive(); //passes\nenforce("10.12").isPositive(); //passes\nenforce(-10).isPositive(); // throws\nenforce("-10.12").isPositive(); // throws\n'
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
