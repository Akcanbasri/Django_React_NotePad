from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer


# Create your views here.
@api_view(["GET"])
def getroutes(request):
    routes = [
        {
            "Endpoint": "/notes/",
            "method": "GET",
            "body": None,
            "description": "Returns an array of notes",
        },
        {
            "Endpoint": "/notes/id",
            "method": "GET",
            "body": None,
            "description": "Returns a single note object",
        },
        {
            "Endpoint": "/notes/create/",
            "method": "POST",
            "body": {"body": ""},
            "description": "Creates new note with data sent in post request",
        },
        {
            "Endpoint": "/notes/id/update/",
            "method": "PUT",
            "body": {"body": ""},
            "description": "Creates an existing note with data sent in post request",
        },
        {
            "Endpoint": "/notes/id/delete/",
            "method": "DELETE",
            "body": None,
            "description": "Deletes and exiting note",
        },
    ]

    return Response(routes)


@api_view(["GET"])
def getNotes(request):
    # get all notes from database
    notes = Note.objects.all().order_by("-updated_at")
    # serialize notes
    serializer = NoteSerializer(notes, many=True)
    # return serialized data
    return Response(serializer.data)


@api_view(["GET"])
def getNote(request, pk):
    # get note from database
    note = Note.objects.get(id=pk)
    # serialize note
    serializer = NoteSerializer(note, many=False)
    # return serialized data
    return Response(serializer.data)


@api_view(["PUT"])
def updateNote(request, pk):
    # get note from database
    note = Note.objects.get(id=pk)
    # serialize note
    serializer = NoteSerializer(instance=note, data=request.data)
    # return serialized data
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["DELETE"])
def deleteNote(request, pk):
    # get note from database
    note = Note.objects.get(id=pk)
    # delete note
    note.delete()
    # return serialized data
    return Response("Note was deleted")


@api_view(["POST"])
def createNote(request):
    # serialize note
    serializer = NoteSerializer(data=request.data)
    # return serialized data
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)
