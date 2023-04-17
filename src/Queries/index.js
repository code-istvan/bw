const ALL_QUERIES = `
{
  allScheduleJson(sort: { date: DESC }) {
    nodes {
      date
      class1
      class2
      class3
      class4
      description1
      description2
      description3
      description4
      signup1
      signup2
      signup3
      signup4
      time1
      time2
      time3
      time4
      teacher1
      teacher2
      teacher3
      teacher4
      teacherlink1
      teacherlink2
      teacherlink3
      teacherlink4
      fullmoon
      newmoon
      ekadashi
    }
  }
  allFile(filter: { sourceInstanceName: { eq: "uploads" } }) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
  allMdx(
    sort: { frontmatter: { date: DESC } }
    filter: { frontmatter: { published: { eq: true } } }
  ) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
        tags
        author
        thumbnail
      }
      internal {
        contentFilePath
      }
    }
  }
}
`
module.exports = ALL_QUERIES
