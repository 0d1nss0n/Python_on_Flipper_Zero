# Python on Flipper Zero

This repository contains JavaScript files to facilitate running Python scripts on Flipper Zero, a versatile multi-tool device. It includes two JavaScript files and an example Python script.

## Contents

- [Introduction](#introduction)
- [Files](#files)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Flipper Zero is a powerful tool with the capability to run Python scripts. This repository provides easy-to-use JavaScript files to streamline the process of launching Python on Flipper Zero.

## Files

1. **Run_Python.js**: This JavaScript file enables launching Python on Flipper Zero.
2. **Run_Python_Scripts.js**: This JavaScript file launches Python on Flipper Zero and then executes an example Python script called `example.py`.
3. **example.py**: An example Python script to demonstrate the functionality of `Run_Python_Scripts.js`.

## Usage

1. Create a mass storage image on the flipper called Python that's 4gb 
2. Download the embedded python zip from here - https://www.python.org/ftp/python/3.11.8/python-3.11.8-embed-amd64.zip
3. Mount the flippers Python image and extract the python zip into that drive
4. Open this file in a text editor "python311._pth" and uncomment "import site" then save
5. Put this file attached called "get_pip.py" in the python drive that has python.exe, can also download it from here - https://bootstrap.pypa.io/get-pip.py
6. Next open a terminal in that drive and run ".\python.exe get_pip.py"
7. This will install PIP on the portable python image
8. Once this is done you can directly call PIP to install modules with a command like ".\Scripts\pip install cryptography" that is run from the main python directory in your flippers storage
9. Now you just need to put the run_python.js script in the Scripts section of your flipper and run it. 


For `Run_Python_Scripts.js`, make sure to have `example.py` in a directory called Payloads in the root of the Flippers mass storage.

## Contributing

Contributions are welcome! If you have any improvements or additional functionality to add, feel free to open a pull request or create an issue.

## License

This project is licensed under the [MIT License](LICENSE).

