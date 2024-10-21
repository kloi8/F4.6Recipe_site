from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView


from .models import *
from .serializers import *

class RecipeListAPIView(ListAPIView):
    serializer_class = RecipeSerializer
    queryset = Category.objects.all()

    def get_queryset(self):
        return Recipe.objects.all().filter(category__title=self.kwargs['category'])

class RecipeAPIView(APIView):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()
    

class CategoryListAPIView(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

