from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from covid import views


urlpatterns = [
    path("cases/", views.covid_cases, name="covid_cases"),
]

urlpatterns = format_suffix_patterns(urlpatterns)
