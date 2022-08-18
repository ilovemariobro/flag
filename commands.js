            var commands = {};

        commands.help = function () {
            var output = "<div>" +
                "<ul>" +
                "<li><strong>help</strong> - display this</li>" +
                "<li><strong>ls</strong> - prints files in current directory</li>" +
                "<li><strong>cat FILENAME</strong> - prints out contents of file FILENAME</li>" +
                "<li><strong>hello NAME</strong> - displays a greeting for NAME</li>" +
                "<li><strong>login USERNAME PASSWORD</strong> - logs in</li>" +
                "<li><strong>credits</strong> - credits</li>" +
                
                "</ul></div>";
            return output;
        };

        commands.ls = function () {
            var output = "<br>password.txt.hash<br><br>"
            return output;
        }
        
        commands.credits = function () {
            var output = "<p>made by rad with love, inspiration given by friends</p>"
            return output;
        }

        commands.cd = function() {
            return "Permission Denied";
        }

        commands.sudo = function() { return "Command not found" };
        commands.su = function() { return "Command not found" };
        commands.apt = function () { return "Command not found" };
        commands.ps = function () { return "Command not found" };
        commands.htop = function () { return "Command not found" };
        commands.grep = function () { return "Command not found" };
        commands.curl = function() { return "Command not found" };
        
        
        commands.cat = function(args) {
            if (args[1] == "password.txt.hash"){
                return "12d5d22ffcb120037ae684c2c8c908df"
            }
            return "Error: File not found"
        }

        commands.login = function(args) {
            if (args[1] != "root") {
                return "Error: Username not found"
            }
            p = btoa(args[2]);
            if (p != "cmFkaWNhbA==") {
                return "Error: Incorrect Password"
            }
            a = atob("ZmxhZ19mdW1vMTgyMApzaG9vdCBtZSBhIGRtIGxvbCByYWQjOTk5OQ==");
            return a;
        }

        commands.hello = function (args) {
            if (args.length < 2) return "<p>Hello, what's your name?</p>";
            return "Hello " + args[1];
        };
            

        Terminal.init(document.getElementById("terminal"), commands);