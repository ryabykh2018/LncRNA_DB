# vim: set fileencoding=utf-8 :
from django.contrib import admin

from . import models


class BinChromhmmAdmin(admin.ModelAdmin):

    list_display = ('id', 'bin', 'chromhmm')
    list_filter = ('chromhmm',)
    raw_id_fields = ('bin',)


class BinGeneAdmin(admin.ModelAdmin):

    list_display = ('id', 'bin', 'gene')
    raw_id_fields = ('bin', 'gene')


class BinGenomAdmin(admin.ModelAdmin):

    list_display = ('id', 'chr', 'start', 'end')
    list_filter = ('chr',)


class ChromhmmAdmin(admin.ModelAdmin):

    list_display = ('id', 'chr', 'start', 'end', 'hmm')
    list_filter = ('chr', 'hmm')


class ContactsAdmin(admin.ModelAdmin):

    list_display = ('id', 'bin_rna', 'bin_dna', 'strand_rna', 'value')
    list_filter = ('strand_rna',)
    raw_id_fields = ('bin_rna', 'bin_dna')


class ExperimentsAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'id_organism',
        'id_tissue',
        'id_paper',
        'ncbi_id',
        'id_type',
        'method',
    )


class GenesAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'chr',
        'start',
        'end',
        'strand',
        'gene_type',
        'gene_name',
    )
    list_filter = ('chr', 'strand')


class TypeChrAdmin(admin.ModelAdmin):

    list_display = ('id', 'chr_name', 'organism_id', 'build', 'len')


class TypeStrandAdmin(admin.ModelAdmin):

    list_display = ('id', 'strand_id')


class TypesOfChromhmmAdmin(admin.ModelAdmin):

    list_display = ('id', 'type_chromhmm')


def _register(model, admin_class):
    admin.site.register(model, admin_class)


_register(models.BinChromhmm, BinChromhmmAdmin)
_register(models.BinGene, BinGeneAdmin)
_register(models.BinGenom, BinGenomAdmin)
_register(models.Chromhmm, ChromhmmAdmin)
_register(models.Contacts, ContactsAdmin)
_register(models.Experiments, ExperimentsAdmin)
_register(models.Genes, GenesAdmin)
_register(models.TypeChr, TypeChrAdmin)
_register(models.TypeStrand, TypeStrandAdmin)
_register(models.TypesOfChromhmm, TypesOfChromhmmAdmin)
