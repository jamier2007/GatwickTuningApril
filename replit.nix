{
  description = "A basic repl.it environment for Node.js";

  deps = {
    channels.nixpkgs.nodejs = "20.x";
    channels.nixpkgs.npm = "latest";
    channels.nixpkgs.yarn = "latest";
    channels.nixpkgs.nodePackages.vite = "latest";
  };

  env = {
    NODE_ENV = "production";
    NODE_OPTIONS = "--max-old-space-size=2048";
  };
}
