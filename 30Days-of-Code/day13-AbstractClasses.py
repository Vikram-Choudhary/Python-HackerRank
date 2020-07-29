from abc import ABCMeta, abstractmethod


class Book(object, metaclass=ABCMeta):
    def __init__(self, title, author):
        self.title = title
        self.author = author

    @abstractmethod
    def display(): pass

# Write MyBook class


class MyBook(Book):
    def __init__(self, title, author, price):
        # super() lets you avoid referring to the base class explicitly, But the main advantage comes with multiple inheritance
        super().__init__()
        self.price = price

    def display(self):
        print("Title: "+title)
        print("Author: "+author)
        print("Price: "+str(price))


title = input()
author = input()
price = int(input())
new_novel = MyBook(title, author, price)
new_novel.display()
