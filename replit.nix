{
  description = "A basic repl.it environment";

  deps = {
    channels.nixpkgs.nodejs = "20.x";
    channels.nixpkgs.npm = "latest";
  };

  env = {
    NODE_ENV = "development";
  };
}
