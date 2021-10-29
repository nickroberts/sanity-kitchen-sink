export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '617b6988502bee60770f8bd6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vujxpq2e',
                  apiId: '6d7b48cc-b05e-48bd-8fd6-287204b88dd9'
                },
                {
                  buildHookId: '617b69886c02f5519dbc19d0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k42yw5q6',
                  apiId: 'ddb7c3e2-5974-4699-8533-8b3f4febdac5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickroberts/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k42yw5q6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
