const PROJECTS = {
  di: 'DI',
  framework: 'Framework',
  smb: 'SMB',
};

function getProjectName(project: string): string {
  return PROJECTS[project as keyof typeof PROJECTS];
}

export { getProjectName };
