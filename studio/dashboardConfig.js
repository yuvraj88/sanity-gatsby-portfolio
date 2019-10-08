export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d9c43c5107a90a6c184c953',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-u9hgcag1',
                  apiId: 'd35bf744-6d8f-4205-a3ad-19c75fdaad1f'
                },
                {
                  buildHookId: '5d9c43c5979d774bdae0bc04',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cvtb33k7',
                  apiId: 'e28b9c3b-5e58-4b11-a22b-e6d7f0fd7dbf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yuvraj88/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cvtb33k7.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
