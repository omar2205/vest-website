
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','79a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','53f'),
    routes: [
      {
        path: '/docs/concepts',
        component: ComponentCreator('/docs/concepts','fb5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/enforce/compound_rules',
        component: ComponentCreator('/docs/enforce/compound_rules','305'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/enforce/consuming_external_rules',
        component: ComponentCreator('/docs/enforce/consuming_external_rules','853'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/enforce/creating_custom_rules',
        component: ComponentCreator('/docs/enforce/creating_custom_rules','a8d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/enforce/enforce',
        component: ComponentCreator('/docs/enforce/enforce','66c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/enforce/enforce_rules',
        component: ComponentCreator('/docs/enforce/enforce_rules','1f3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/get_started',
        component: ComponentCreator('/docs/get_started','852'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/migration_guide',
        component: ComponentCreator('/docs/migration_guide','192'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/recipies/using_with_node',
        component: ComponentCreator('/docs/recipies/using_with_node','053'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/understanding_state',
        component: ComponentCreator('/docs/understanding_state','945'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/utilities/classnames',
        component: ComponentCreator('/docs/utilities/classnames','cde'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/utilities/promisify',
        component: ComponentCreator('/docs/utilities/promisify','bc7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/advanced_test_features/grouping_tests',
        component: ComponentCreator('/docs/writing_tests/advanced_test_features/grouping_tests','504'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/advanced_test_features/test.each',
        component: ComponentCreator('/docs/writing_tests/advanced_test_features/test.each','296'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/advanced_test_features/test.memo',
        component: ComponentCreator('/docs/writing_tests/advanced_test_features/test.memo','eee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/async_tests',
        component: ComponentCreator('/docs/writing_tests/async_tests','0da'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/failing_with_a_custom_message',
        component: ComponentCreator('/docs/writing_tests/failing_with_a_custom_message','ac1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/using_the_test_function',
        component: ComponentCreator('/docs/writing_tests/using_the_test_function','b38'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/warn_only_tests',
        component: ComponentCreator('/docs/writing_tests/warn_only_tests','8ef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/including_and_excluding/skip_and_only',
        component: ComponentCreator('/docs/writing_your_suite/including_and_excluding/skip_and_only','653'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/including_and_excluding/skip_and_only_group',
        component: ComponentCreator('/docs/writing_your_suite/including_and_excluding/skip_and_only_group','ba6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/including_and_excluding/skipWhen',
        component: ComponentCreator('/docs/writing_your_suite/including_and_excluding/skipWhen','81e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/optional_fields',
        component: ComponentCreator('/docs/writing_your_suite/optional_fields','054'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/result_object',
        component: ComponentCreator('/docs/writing_your_suite/result_object','96f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/vests_suite',
        component: ComponentCreator('/docs/writing_your_suite/vests_suite','78c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];