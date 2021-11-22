export const CodeSnippets =
[
{title: 'Bogo Sort',
code: `import random;

def bogo_sort(data):
    while not is_sorted(data):
        random.shuffle(data)


def is_sorted(data):
    for i in range(len(data) - 1):
        if data[i] > data[i + 1]:
            return False
    return True


data = [4, 2, 3, 1]
bogo_sort(data)
print(data) `},

{title: 'Jump Search',
code: `import math

def jump_search(data, item):
    step = round(math.sqrt(len(data)))
    i = 0
    while i < len(data) and data[i] <= item:
        i += step
    for i in range(i - step, i):
        if data[i] == item:
            return i
    return -1


data = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]
print(jump_search(data, 55))`},

{title: 'Fisher-Yates Shuffle',
code: `import random

def shuffle(data):
    for i in range(len(data) - 1):
        j = random.randrange(i, len(data))
        data[i], data[j] = data[j], data[i]


data = [0, 1, 2, 3, 4, 5]
shuffle(data)
print(data)`},

{title: 'Star',
code: `def star(size):
    size //= 2
    for i in range(-size, size + 1):
        for j in range(-size, size + 1):
            if abs(i) == abs(j) or i == 0 or j == 0:
                print('*', end='')
            else:
                print(' ', end='')
        print()


star(7)`},

{title: 'Palindrome',
code: `def is_palindrome(sentence):
    sentence = sentence.replace(' ', '')
    for i in range(len(sentence) // 2):
        if sentence[i] != sentence[-i - 1]:
            return False
    return True


print(is_palindrome('taco cat'))
print(is_palindrome('taco the cat'))`},

{title: 'FizzBuzz',
code: `def fizzbuzz(n):
    for i in range(1, n + 1):
        if i % 3 == 0:
            print('fizz', end='')
        if i % 5 == 0:
            print('buzz', end='')
        if i % 3 != 0 and i % 5 != 0:
            print(i, end='')
        print()


fizzbuzz(15)`},

{title: 'Line Graph',
code: `import math

def draw_line_graph(data):
    max_value = math.ceil(max(data))
    min_value = math.floor(min(data))
    for y in range(max_value, min_value - 1, -1):
        print('{:<3}|'.format(y), end='')
        for x in range(len(data)):
            if round(data[x]) == y:
                print('*', end='')
            elif y == 0:
                print('-', end='')
            else:
                print(' ', end='')
        print()


fidelity = 60
height = 5
data = [height * math.sin(math.pi * x / fidelity * 2) for x in range(fidelity)]
draw_line_graph(data)`},

{title: 'Merge Sorted Lists',
code: `def merge(list1, list2):
    result = []
    i, j = 0, 0
    while i < len(list1) and j < len(list2):
        if list1[i] < list2[j]:
            result.append(list1[i])
            i += 1
        else:
            result.append(list2[j])
            j += 1
    result += list1[i:] + list2[j:]
    return result


print(merge([1, 2, 3, 7], [4, 5, 6, 8]))`},

{title: 'Get Change',
code: `def get_change(amount):
    denominations = [1, 2, 5, 10]
    change = [None] * (amount + 1)
    change[0] = ()
    for coin in denominations:
        for i in range(coin, amount + 1):
            known_change = change[i - coin]
            if known_change is not None and change[i] is not None:
                change[i] = min(change[i], known_change + (coin,), key=len)
            elif known_change is not None:
                change[i] = known_change + (coin,)
    return change[amount]


amount = 24
change = get_change(amount)
print('The change to give for \${} is {}'.format(amount, change))`},
    {title: 'Moo',
    code:`
raise Cowsay('Moo')
'''   ^__^                             ^__^
      (oo)\\_______             _______/(oo)
      (__)\\       )\\/\\     /\\/(       /(__)
          ||----w |           | w----||
          ||     ||           ||     || 
'''''''''''''''''''''''''''''''''''''''''''''`}
]
