(self.webpackChunkjustinlettau_github_io =
  self.webpackChunkjustinlettau_github_io || []).push([
  [678],
  {
    4175: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return w;
          },
        });
      var n = r(7190),
        a = r(4694),
        l = r(5697),
        o = r.n(l),
        i = r(7294);
      function s(e) {
        return (s =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function c(e, t, r) {
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
      function u(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function m(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      function p(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, r = new Array(e.length); t < e.length; t++)
                r[t] = e[t];
              return r;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            );
          })()
        );
      }
      function b(e) {
        return (
          (t = e),
          (t -= 0) == t
            ? e
            : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : '';
              }))
                .substr(0, 1)
                .toLowerCase() + e.substr(1)
        );
        var t;
      }
      function y(e) {
        return e
          .split(';')
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return e;
          })
          .reduce(function (e, t) {
            var r,
              n = t.indexOf(':'),
              a = b(t.slice(0, n)),
              l = t.slice(n + 1).trim();
            return (
              a.startsWith('webkit')
                ? (e[((r = a), r.charAt(0).toUpperCase() + r.slice(1))] = l)
                : (e[a] = l),
              e
            );
          }, {});
      }
      var h = !1;
      try {
        h = !0;
      } catch (E) {}
      function d(e) {
        return a.Qc.icon
          ? a.Qc.icon(e)
          : null === e
          ? null
          : 'object' === s(e) && e.prefix && e.iconName
          ? e
          : Array.isArray(e) && 2 === e.length
          ? { prefix: e[0], iconName: e[1] }
          : 'string' == typeof e
          ? { prefix: 'fas', iconName: e }
          : void 0;
      }
      function O(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? c({}, e, t)
          : {};
      }
      function g(e) {
        var t = e.forwardedRef,
          r = m(e, ['forwardedRef']),
          n = r.icon,
          l = r.mask,
          o = r.symbol,
          i = r.className,
          s = r.title,
          u = r.titleId,
          b = d(n),
          y = O(
            'classes',
            [].concat(
              p(
                (function (e) {
                  var t,
                    r = e.spin,
                    n = e.pulse,
                    a = e.fixedWidth,
                    l = e.inverse,
                    o = e.border,
                    i = e.listItem,
                    s = e.flip,
                    u = e.size,
                    f = e.rotation,
                    m = e.pull,
                    p =
                      (c(
                        (t = {
                          'fa-spin': r,
                          'fa-pulse': n,
                          'fa-fw': a,
                          'fa-inverse': l,
                          'fa-border': o,
                          'fa-li': i,
                          'fa-flip-horizontal':
                            'horizontal' === s || 'both' === s,
                          'fa-flip-vertical': 'vertical' === s || 'both' === s,
                        }),
                        'fa-'.concat(u),
                        null != u
                      ),
                      c(t, 'fa-rotate-'.concat(f), null != f && 0 !== f),
                      c(t, 'fa-pull-'.concat(m), null != m),
                      c(t, 'fa-swap-opacity', e.swapOpacity),
                      t);
                  return Object.keys(p)
                    .map(function (e) {
                      return p[e] ? e : null;
                    })
                    .filter(function (e) {
                      return e;
                    });
                })(r)
              ),
              p(i.split(' '))
            )
          ),
          w = O(
            'transform',
            'string' == typeof r.transform
              ? a.Qc.transform(r.transform)
              : r.transform
          ),
          E = O('mask', d(l)),
          j = (0, a.qv)(
            b,
            f({}, y, {}, w, {}, E, { symbol: o, title: s, titleId: u })
          );
        if (!j)
          return (
            (function () {
              var e;
              !h &&
                console &&
                'function' == typeof console.error &&
                (e = console).error.apply(e, arguments);
            })('Could not find icon', b),
            null
          );
        var x = j.abstract,
          N = { ref: t };
        return (
          Object.keys(r).forEach(function (e) {
            g.defaultProps.hasOwnProperty(e) || (N[e] = r[e]);
          }),
          v(x[0], N)
        );
      }
      (g.displayName = 'FontAwesomeIcon'),
        (g.propTypes = {
          border: o().bool,
          className: o().string,
          mask: o().oneOfType([o().object, o().array, o().string]),
          fixedWidth: o().bool,
          inverse: o().bool,
          flip: o().oneOf(['horizontal', 'vertical', 'both']),
          icon: o().oneOfType([o().object, o().array, o().string]),
          listItem: o().bool,
          pull: o().oneOf(['right', 'left']),
          pulse: o().bool,
          rotation: o().oneOf([0, 90, 180, 270]),
          size: o().oneOf([
            'lg',
            'xs',
            'sm',
            '1x',
            '2x',
            '3x',
            '4x',
            '5x',
            '6x',
            '7x',
            '8x',
            '9x',
            '10x',
          ]),
          spin: o().bool,
          symbol: o().oneOfType([o().bool, o().string]),
          title: o().string,
          transform: o().oneOfType([o().string, o().object]),
          swapOpacity: o().bool,
        }),
        (g.defaultProps = {
          border: !1,
          className: '',
          mask: null,
          fixedWidth: !1,
          inverse: !1,
          flip: null,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          symbol: !1,
          title: '',
          transform: null,
          swapOpacity: !1,
        });
      var v = function e(t, r) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if ('string' == typeof r) return r;
          var a = (r.children || []).map(function (r) {
              return e(t, r);
            }),
            l = Object.keys(r.attributes || {}).reduce(
              function (e, t) {
                var n = r.attributes[t];
                switch (t) {
                  case 'class':
                    (e.attrs.className = n), delete r.attributes.class;
                    break;
                  case 'style':
                    e.attrs.style = y(n);
                    break;
                  default:
                    0 === t.indexOf('aria-') || 0 === t.indexOf('data-')
                      ? (e.attrs[t.toLowerCase()] = n)
                      : (e.attrs[b(t)] = n);
                }
                return e;
              },
              { attrs: {} }
            ),
            o = n.style,
            i = void 0 === o ? {} : o,
            s = m(n, ['style']);
          return (
            (l.attrs.style = f({}, l.attrs.style, {}, i)),
            t.apply(void 0, [r.tag, f({}, l.attrs, {}, s)].concat(p(a)))
          );
        }.bind(null, i.createElement),
        w = function () {
          return i.createElement(
            'main',
            null,
            i.createElement('title', null, 'Justin Lettau'),
            i.createElement(
              'section',
              { className: 'hero is-fullheight bg' },
              i.createElement(
                'div',
                { className: 'hero-body' },
                i.createElement(
                  'div',
                  { className: 'container has-text-centered' },
                  i.createElement(
                    'h1',
                    {
                      className:
                        'title is-size-1 has-text-light has-text-weight-light',
                    },
                    "Hello, I'm ",
                    i.createElement(
                      'span',
                      { className: 'has-text-primary' },
                      'Justin Lettau'
                    )
                  ),
                  i.createElement(
                    'p',
                    { className: 'subtitle has-text-light' },
                    "I'm a full-stack web developer."
                  )
                )
              )
            ),
            i.createElement(
              'footer',
              { className: 'footer' },
              i.createElement(
                'div',
                { className: 'container' },
                i.createElement(
                  'div',
                  { className: 'columns is-justify-content-space-between' },
                  i.createElement(
                    'div',
                    { className: 'column is-narrow' },
                    i.createElement(
                      'p',
                      { className: 'menu-label' },
                      'Get in touch'
                    ),
                    i.createElement(
                      'ul',
                      { className: 'menu-list' },
                      i.createElement(
                        'li',
                        null,
                        i.createElement(
                          'a',
                          {
                            href: 'https://github.com/justinlettau',
                            className: 'icon-text',
                          },
                          i.createElement(
                            'span',
                            { className: 'icon' },
                            i.createElement(g, { icon: n.zhw })
                          ),
                          i.createElement('span', null, 'GitHub')
                        )
                      ),
                      i.createElement(
                        'li',
                        null,
                        i.createElement(
                          'a',
                          {
                            href: 'https://www.npmjs.com/~justinlettau',
                            className: 'icon-text',
                          },
                          i.createElement(
                            'span',
                            { className: 'icon' },
                            i.createElement(g, { icon: n.xDz })
                          ),
                          i.createElement('span', null, 'NPM')
                        )
                      ),
                      i.createElement(
                        'li',
                        null,
                        i.createElement(
                          'a',
                          {
                            href: 'https://www.linkedin.com/in/justin-lettau-aaa832a0',
                            className: 'icon-text',
                          },
                          i.createElement(
                            'span',
                            { className: 'icon' },
                            i.createElement(g, { icon: n.D9H })
                          ),
                          i.createElement('span', null, 'LinkedIn')
                        )
                      )
                    )
                  ),
                  i.createElement(
                    'div',
                    { className: 'column is-narrow' },
                    i.createElement(
                      'p',
                      { className: 'is-size-7' },
                      '© Justin Lettau'
                    )
                  )
                )
              )
            )
          );
        };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-e999e4282370d7c7df4c.js.map
