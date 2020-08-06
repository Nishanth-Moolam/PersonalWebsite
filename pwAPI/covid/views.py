from django.shortcuts import render
import requests
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import datetime


@api_view(["GET"])
def covid_cases(request, format=None):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == "GET":
        response = requests.get(
            "https://api.covid19api.com/country/canada/status/confirmed/live"
        )
        data = response.json()
        x = str(datetime.date.today() - datetime.timedelta(days=1))
        latest = []
        for i in data:
            if x in i["Date"]:
                latest.append(i)

        return Response(latest)
