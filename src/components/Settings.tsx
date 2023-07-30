interface SettingsProps {}

export function Settings({}: SettingsProps) {
  return (
    <>
      <h1>Settings</h1>
      <img alt="profile pic" width={100} height={100} className="bg-red-400" />
      <span>Edit</span>
    </>
  );
}
