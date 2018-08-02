# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class BinChromhmm(models.Model):
    id = models.IntegerField(primary_key=True)
    bin = models.ForeignKey('BinGenom', models.DO_NOTHING, blank=True, null=True)
    chromhmm = models.ForeignKey('TypesOfChromhmm', models.DO_NOTHING, db_column='chromHMM_id', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        
        db_table = 'bin_chromhmm'


class BinGene(models.Model):
    id = models.IntegerField(primary_key=True)
    bin = models.ForeignKey('BinGenom', models.DO_NOTHING, blank=True, null=True)
    gene = models.ForeignKey('Genes', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        
        db_table = 'bin_gene'


class BinGenom(models.Model):
    id = models.IntegerField(primary_key=True)
    chr = models.ForeignKey('TypeChr', models.DO_NOTHING, blank=True, null=True)
    start = models.IntegerField(blank=True, null=True)
    end = models.IntegerField(blank=True, null=True)

    class Meta:
        
        db_table = 'bin_genom'


class Chromhmm(models.Model):
    id = models.IntegerField(primary_key=True)
    chr = models.ForeignKey('TypeChr', models.DO_NOTHING, blank=True, null=True)
    start = models.IntegerField(blank=True, null=True)
    end = models.IntegerField(blank=True, null=True)
    hmm = models.ForeignKey('TypesOfChromhmm', models.DO_NOTHING, db_column='HMM_id', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        
        db_table = 'chromhmm'


class Contacts(models.Model):
    id = models.IntegerField(primary_key=True)
    bin_rna = models.ForeignKey(BinGenom, models.DO_NOTHING, db_column='bin_rna', related_name='bin_rna', blank=True, null=True)
    bin_dna = models.ForeignKey(BinGenom, models.DO_NOTHING, db_column='bin_dna', related_name='bin_dna', blank=True, null=True)
    strand_rna = models.ForeignKey('TypeStrand', models.DO_NOTHING, db_column='strand_RNA', blank=True, null=True)  # Field name made lowercase.
    value = models.IntegerField(blank=True, null=True)

    class Meta:
        
        db_table = 'contacts'
        unique_together = (('bin_dna', 'bin_rna'),)


class Experiments(models.Model):
    id = models.IntegerField(primary_key=True)
    id_organism = models.IntegerField(blank=True, null=True)
    id_tissue = models.IntegerField(blank=True, null=True)
    id_paper = models.IntegerField(blank=True, null=True)
    ncbi_id = models.CharField(db_column='NCBI_id', max_length=60, blank=True, null=True)  # Field name made lowercase.
    id_type = models.IntegerField(blank=True, null=True)
    method = models.CharField(max_length=60, blank=True, null=True)

    class Meta:
        
        db_table = 'experiments'


class Genes(models.Model):
    id = models.IntegerField(primary_key=True)
    chr = models.ForeignKey('TypeChr', models.DO_NOTHING, blank=True, null=True)
    start = models.IntegerField(blank=True, null=True)
    end = models.IntegerField(blank=True, null=True)
    strand = models.ForeignKey('TypeStrand', models.DO_NOTHING, db_column='strand', blank=True, null=True)
    gene_type = models.CharField(max_length=60, blank=True, null=True)
    gene_name = models.CharField(max_length=60, blank=True, null=True)

    class Meta:
        
        db_table = 'genes'


class TypeChr(models.Model):
    id = models.IntegerField(primary_key=True)
    chr_name = models.CharField(max_length=60, blank=True, null=True)
    organism_id = models.CharField(max_length=60, blank=True, null=True)
    build = models.CharField(max_length=60, blank=True, null=True)
    len = models.IntegerField(blank=True, null=True)

    class Meta:
        
        db_table = 'type_chr'


class TypeStrand(models.Model):
    id = models.IntegerField(primary_key=True)
    strand_id = models.CharField(max_length=60, blank=True, null=True)

    class Meta:
        
        db_table = 'type_strand'


class TypesOfChromhmm(models.Model):
    id = models.IntegerField(primary_key=True)
    type_chromhmm = models.CharField(db_column='type_chromHMM', max_length=60, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        
        db_table = 'types_of_chromhmm'
