# Example Script without additional imports

def is_even(num):
  return num % 2 == 0

def main():
  for i in range(1, 11):
    if is_even(i):
      print(f"{i} is even")
    else:
      print(f"{i} is odd")

  input("Press Enter to exit...")

main()
