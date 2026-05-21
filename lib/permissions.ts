export function hasPermission(
  userRole: string,
  allowedRoles: string[]
) {
  return allowedRoles.includes(
    userRole
  );
}