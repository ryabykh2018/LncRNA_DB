from django.shortcuts import render

from django.http import HttpResponse
# Create your views here.


def test_users(request):
    return HttpResponse('<strong>sosi</strong>')