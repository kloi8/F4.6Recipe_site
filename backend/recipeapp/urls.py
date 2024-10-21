from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.schemas import get_schema_view
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register('recipe_list', views.RecipeListAPIView),
# router.register('recipe', views.RecipeAPIView),
# router.register('category', views.CategoryListAPIView),


# urlpatterns = [
#     path('', include(router.urls)),

# ]


urlpatterns = [
    path('recipe/<int:pk>', views.RecipeAPIView.as_view(), name='recipe'),
    path('recipe/<str:category>', views.RecipeListAPIView.as_view(), name='recipe_list'),
    path('categories', views.CategoryListAPIView.as_view(), name='category'),
    path('openapi', get_schema_view(
            title='API',
            description='API description'), name='openapi-schema'),

] 