from django.contrib import admin
from .models import Note

# Register your models here.

@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ('id', 'body', 'created_at', 'updated_at')
    list_display_links = ('id', 'body')
    search_fields = ('body',)
    list_per_page = 25
    list_filter = ('created_at', 'updated_at')
    
    class Meta:
        model = Note