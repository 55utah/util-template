// 常用的配置，并非项目必须

module.exports = {
  extends: ['./eslintrc.js'],
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // @fixable jsx 中的属性必须用双引号
    'jsx-quotes': ['error', 'prefer-double'],
    // 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头
    // @off 不强制要求写 propTypes
    'react/boolean-prop-naming': 'off',
    // 一个 defaultProps 必须有对应的 propTypes
    // @off 不强制要求写 propTypes
    'react/default-props-match-prop-types': 'off',
    // One JSX Element Per Line https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    // 暂时关闭，对于 文字+插值 的内容折行后阅读效果并不理想，而且fix后文字缩进有问题
    // 'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    // Enforce consistent usage of destructuring assignment of props, state, and context
    'react/destructuring-assignment': ['error', 'always'],
    // Prevent using this.state within a this.setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'error',
    // Prevent usage of button elements without an explicit type attribute
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],
    // Ensures inline tags are not rendered without spaces between them
    'react/jsx-child-element-spacing': 'off',
    // Prevent this from being used in stateless functional components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',
    // 组件必须有 displayName 属性
    // @off 不强制要求写 displayName
    'react/display-name': 'off',
    // 禁止在自定义组件中使用一些指定的 props
    // @off 没必要限制
    'react/forbid-component-props': 'off',
    // 禁止使用一些指定的 elements
    // @off 没必要限制
    'react/forbid-elements': 'off',
    // 禁止使用一些指定的 propTypes
    // @off 不强制要求写 propTypes
    'react/forbid-prop-types': 'off',
    // 禁止使用一些指定的 dom 属性
    // @off
    'react/forbid-dom-props': ['off', { forbid: [] }],
    // 禁止直接使用别的组建的 propTypes
    // @off 不强制要求写 propTypes
    'react/forbid-foreign-prop-types': 'off',
    // 禁止使用数组的 index 作为 key
    // @off 太严格了
    'react/no-array-index-key': 'off',
    // 禁止使用 children 做 props
    'react/no-children-prop': 'error',
    // 禁止使用 dangerouslySetInnerHTML
    'react/no-danger': 'warn',
    // 禁止在使用了 dangerouslySetInnerHTML 的组建内添加 children
    'react/no-danger-with-children': 'error',
    // 禁止使用已废弃的 api
    'react/no-deprecated': 'error',
    // 禁止在 componentDidMount 里面使用 setState
    // @off 同构应用需要在 didMount 里写 setState
    'react/no-did-mount-set-state': 'off',
    // 禁止在 componentDidUpdate 里面使用 setState
    'react/no-did-update-set-state': 'error',
    // 禁止直接修改 this.state
    'react/no-direct-mutation-state': 'error',
    // 禁止使用 findDOMNode
    'react/no-find-dom-node': 'error',
    // 禁止使用 isMounted
    'react/no-is-mounted': 'error',
    // 禁止在一个文件创建两个组件
    // @off 有一个 bug https://github.com/yannickcr/eslint-plugin-react/issues/1181
    'react/no-multi-comp': 'off',
    // 禁止在 PureComponent 中使用 shouldComponentUpdate
    'react/no-redundant-should-component-update': 'error',
    // 禁止使用 ReactDOM.render 的返回值
    'react/no-render-return-value': 'error',
    // 禁止使用 setState
    // @off setState 很常用
    'react/no-set-state': 'off',
    // 禁止拼写错误
    'react/no-typos': 'error',
    // 禁止使用字符串 ref
    'react/no-string-refs': 'error',
    // 禁止在组件的内部存在未转义的 >, ", ' 或 }
    'react/no-unescaped-entities': 'error',
    // @fixable 禁止出现 HTML 中的属性，如 class
    'react/no-unknown-property': 'error',
    // 禁止出现未使用的 propTypes
    // @off 不强制要求写 propTypes
    'react/no-unused-prop-types': 'off',
    // 定义过的 state 必须使用
    // @off 没有官方文档，并且存在很多 bug： https://github.com/yannickcr/eslint-plugin-react/search?q=no-unused-state&type=Issues&utf8=%E2%9C%93
    'react/no-unused-state': 'off',
    // 禁止在 componentWillUpdate 中使用 setState
    'react/no-will-update-set-state': 'error',
    // 必须使用 Class 的形式创建组件
    'react/prefer-es6-class': ['error', 'always'],
    // 必须使用 pure function
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true },
    ],
    // 组件必须写 propTypes
    // @off 不强制要求写 propTypes
    'react/prop-types': 'off',
    // 出现 jsx 的地方必须 import React
    'react/react-in-jsx-scope': 'error',
    // 非 required 的 prop 必须有 defaultProps
    // @off 不强制要求写 propTypes
    'react/require-default-props': 'off',
    // 组件必须有 shouldComponentUpdate
    // @off 没必要限制
    'react/require-optimization': ['off', { allowDecorators: [] }],
    // render 方法中必须有返回值
    'react/require-render-return': 'error',
    // @fixable 组件内没有 children 时，必须使用自闭和写法
    'react/self-closing-comp': 'error',
    // @fixable 组件内方法必须按照一定规则排序
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    // style 属性的取值必须是 object
    'react/style-prop-object': 'error',
    // HTML 中的自闭和标签禁止有 children
    'react/void-dom-elements-no-children': 'error',
    // @fixable 布尔值的属性必须显式的写 someprop={true}
    // @off 没必要限制
    'react/jsx-boolean-value': 'off',
    // @fixable 自闭和标签的反尖括号必须与尖括号的那一行对齐
    'react/jsx-closing-bracket-location': [
      'error',
      {
        nonEmpty: false,
        selfClosing: 'line-aligned',
      },
    ],
    // @fixable 结束标签必须与开始标签的那一行对齐
    'react/jsx-closing-tag-location': 'error',
    // @fixable 大括号内前后禁止有空格
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        attributes: {
          allowMultiline: true,
        },
        children: true,
        spacing: {
          objectLiterals: 'never',
        },
      },
    ],
    // @fixable props 与 value 之间的等号前后禁止有空格
    'react/jsx-equals-spacing': ['error', 'never'],
    // 限制文件后缀
    // @off 没必要限制
    'react/jsx-filename-extension': 'off',
    // @fixable 第一个 prop 必须得换行
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    // handler 的名称必须是 onXXX 或 handleXXX
    // @off 没必要限制
    'react/jsx-handler-names': 'off',
    // @fixable jsx 的 children 缩进必须为二个空格
    'react/jsx-indent': ['error', 2],
    // @fixable jsx 的 props 缩进必须为二个空格
    'react/jsx-indent-props': ['error', 2],
    // 数组中的 jsx 必须有 key
    'react/jsx-key': 'error',
    // @fixable 限制每行的 props 数量
    // @off 没必要限制
    'react/jsx-max-props-per-line': 'off',
    // jsx 中禁止使用 bind
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],
    // 禁止在 jsx 中使用像注释的字符串
    'react/jsx-no-comment-textnodes': 'error',
    // 禁止出现重复的 props
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    // 禁止在 jsx 中出现字符串
    // @off 没必要限制
    'react/jsx-no-literals': 'off',
    // 安全使用 target="_blank"
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    // 禁止使用未定义的 jsx elemet
    'react/jsx-no-undef': 'error',
    // 禁止使用 pascal 写法的 jsx，比如 <TEST_COMPONENT>
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    // propTypes 的熟悉必须按照字母排序
    // @off 没必要限制
    'react/sort-prop-types': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    // Deprecated in favor of react/jsx-sort-props
    'react/jsx-sort-prop-types': 'off',
    // @fixable props 必须排好序
    // @off 没必要限制
    'react/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'react/jsx-sort-default-props': [
      'off',
      {
        ignoreCase: true,
      },
    ],
    // @fixable jsx 的开始和闭合处禁止有空格
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    // Enforce spaces before the closing bracket of self-closing JSX elements
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    // Deprecated in favor of jsx-tag-spacing
    'react/jsx-space-before-closing': ['off', 'always'],
    // jsx 文件必须 import React
    'react/jsx-uses-react': 'error',
    // 定义了的 jsx element 必须使用
    'react/jsx-uses-vars': 'error',
    // @fixable 多行的 jsx 必须有括号包起来
    'react/jsx-wrap-multilines': [
      // 'error',
      // {
      //   declaration: 'parens-new-line',
      //   assignment: 'parens-new-line',
      //   return: 'parens-new-line',
      //   arrow: 'parens-new-line',
      //   condition: 'parens-new-line',
      //   logical: 'parens-new-line',
      //   prop: 'parens-new-line',
      // },
      // 和 prettier 冲突
      'error',
      { arrow: true, return: true, declaration: true },
    ],
    // Validate JSX maximum depth
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': 'off',
    // Disallow multiple spaces between inline JSX props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': 'error',

    // Prevent usage of UNSAFE_ methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': 'off',

    // ========
    // react hooks
    // ========
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
  },
}
