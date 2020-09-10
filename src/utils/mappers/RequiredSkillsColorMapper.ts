enum RequiredSkills {
  JAVA = 'JAVA',
  ANGULAR = 'ANGULAR',
  FRONTEND = 'FRONT END',
  BACKEND = 'BACK END',
  FULLSTACK = 'FULL STACK',
  SENIOR = 'SENIOR',
  ORACLE = 'ORACLE',
  PYTHON = 'PYTHON',
  DAX = 'DAX',
  SQL = 'SQL',
  TYPESCRIPT = 'TYPESCRIPT',
  STYLEDCOMPONENTS = 'STYLED-COMPONENTS',
  REACT = 'REACT'
}

export class RequiredSkillsColorMapper {

  public static map(skill: string): string {

    switch (skill) {
      case RequiredSkills.JAVA: {
        return 'geekblue'
      }
      case RequiredSkills.ANGULAR: {
        return 'red'
      }
      case RequiredSkills.FRONTEND: {
        return 'cyan'
      }
      case RequiredSkills.BACKEND: {
        return 'orange'
      }
      case RequiredSkills.FULLSTACK: {
        return 'purple'
      }
      case RequiredSkills.SENIOR: {
        return 'purple'
      }
      case RequiredSkills.ORACLE: {
        return 'geekblue'
      }
      case RequiredSkills.PYTHON: {
        return 'geekblue'
      }
      case RequiredSkills.DAX: {
        return 'green'
      }
      case RequiredSkills.SQL: {
        return 'blue'
      }
      case RequiredSkills.STYLEDCOMPONENTS: {
        return 'magenta'
      }
      case RequiredSkills.REACT: {
        return 'blue'
      }
      case RequiredSkills.TYPESCRIPT: {
        return 'gold'
      }

      default:
        return 'green'
    }
  }
}


