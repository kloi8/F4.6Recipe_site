from django.db import models

class Recipe(models.Model):
    title = models.CharField('Название рецепта', max_length=98)
    text = models.TextField('Описание', max_length=2048)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)


    def __str__(self):
        return f'{self.id} : {self.title}'

class Category(models.Model):
    title = models.CharField('Название категории', max_length=40)

    def __str__(self):
        return f'{self.id} : {self.title}'