from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from .models import *
from .serializers import *

class RecipeListAPIView(ListAPIView):
    serializer_class = RecipeSerializer
    def get(self, request):
        recipes = Recipe.objects.all()
        # преобразуем данные в JSON
        data = [{'id': recipe.id, 'title': recipe.title, 'text': recipe.text} for recipe in recipes]
        return Response(data)
    
    queryset = Recipe.objects.all()

    
class RecipeAPIView(APIView):
    serializer_class = RecipeSerializer
    def get(self, request, pk):
        recipes = Recipe.objects.all()
        data = [{'id': recipe.id, 'title': recipe.title} for recipe in recipes]
        return Response(data)
    
   
    

class CategoryListAPIView(ListAPIView):
    serializer_class = CategorySerializer
    def get(self, request):
        categories = Category.objects.all()
        data = [{'title': category.title} for category in categories]
        return Response(data)
    
    queryset = Category.objects.all()

