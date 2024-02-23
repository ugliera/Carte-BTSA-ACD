var wms_layers = [];

var format_dep_france_0 = new ol.format.GeoJSON();
var features_dep_france_0 = format_dep_france_0.readFeatures(json_dep_france_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dep_france_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dep_france_0.addFeatures(features_dep_france_0);
var lyr_dep_france_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dep_france_0, 
                style: style_dep_france_0,
                interactive: true,
                title: '<img src="styles/legend/dep_france_0.png" /> dep_france'
            });
var format_fusiontotalit_1 = new ol.format.GeoJSON();
var features_fusiontotalit_1 = format_fusiontotalit_1.readFeatures(json_fusiontotalit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fusiontotalit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fusiontotalit_1.addFeatures(features_fusiontotalit_1);
var lyr_fusiontotalit_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fusiontotalit_1, 
                style: style_fusiontotalit_1,
                interactive: true,
    title: 'fusion totalité<br />\
    <img src="styles/legend/fusiontotalit_1_0.png" /> CFA Caulnes<br />\
    <img src="styles/legend/fusiontotalit_1_1.png" /> CFA de la Moselle<br />\
    <img src="styles/legend/fusiontotalit_1_2.png" /> CFA de la Vienne<br />\
    <img src="styles/legend/fusiontotalit_1_3.png" /> CFA de l\'ESA d\'Angers<br />\
    <img src="styles/legend/fusiontotalit_1_4.png" /> CFA de l\'Indre<br />\
    <img src="styles/legend/fusiontotalit_1_5.png" /> CFA de Merdrignac<br />\
    <img src="styles/legend/fusiontotalit_1_6.png" /> CFA de Seine Maritime<br />\
    <img src="styles/legend/fusiontotalit_1_7.png" /> CFA des Ardennes<br />\
    <img src="styles/legend/fusiontotalit_1_8.png" /> CFA du Loiret<br />\
    <img src="styles/legend/fusiontotalit_1_9.png" /> CFA du Lot et Garonne<br />\
    <img src="styles/legend/fusiontotalit_1_10.png" /> CFA du Tarn<br />\
    <img src="styles/legend/fusiontotalit_1_11.png" /> CFA Forma\'Terra à St Paul<br />\
    <img src="styles/legend/fusiontotalit_1_12.png" /> CFA Le Robillard<br />\
    <img src="styles/legend/fusiontotalit_1_13.png" /> CFPPA de Genech<br />\
    <img src="styles/legend/fusiontotalit_1_14.png" /> Ecole des Etablières de La Roche Sur Yon<br />\
    <img src="styles/legend/fusiontotalit_1_15.png" /> EPLEFPA de Châlons en Champagne<br />\
    <img src="styles/legend/fusiontotalit_1_16.png" /> EPLEFPA de Quétigny Plombières Les Dijon<br />\
    <img src="styles/legend/fusiontotalit_1_17.png" /> IAHP de Genech<br />\
    <img src="styles/legend/fusiontotalit_1_18.png" /> Institut privé Ch. Quentin de Pierrefonds<br />\
    <img src="styles/legend/fusiontotalit_1_19.png" /> LAP de Sainte Maure<br />\
    <img src="styles/legend/fusiontotalit_1_20.png" /> LAP Sully de Magnanville<br />\
    <img src="styles/legend/fusiontotalit_1_21.png" /> LEAP de Pommerit Jaudy<br />\
    <img src="styles/legend/fusiontotalit_1_22.png" /> LEAP La Touche de Ploermel<br />\
    <img src="styles/legend/fusiontotalit_1_23.png" /> LEGTA Aix Valabre<br />\
    <img src="styles/legend/fusiontotalit_1_24.png" /> LEGTA Amiens le Paraclet<br />\
    <img src="styles/legend/fusiontotalit_1_25.png" /> LEGTA Bourg les Valence<br />\
    <img src="styles/legend/fusiontotalit_1_26.png" /> LEGTA Carcassonne<br />\
    <img src="styles/legend/fusiontotalit_1_27.png" /> LEGTA Croix Rivail<br />\
    <img src="styles/legend/fusiontotalit_1_28.png" /> LEGTA Dax<br />\
    <img src="styles/legend/fusiontotalit_1_29.png" /> LEGTA de Châteauroux<br />\
    <img src="styles/legend/fusiontotalit_1_30.png" /> LEGTA de la Thiérache<br />\
    <img src="styles/legend/fusiontotalit_1_31.png" /> LEGTA de l\'Oise<br />\
    <img src="styles/legend/fusiontotalit_1_32.png" /> LEGTA E. de Chambray<br />\
    <img src="styles/legend/fusiontotalit_1_33.png" /> LEGTA Fontaines<br />\
    <img src="styles/legend/fusiontotalit_1_34.png" /> LEGTA La Côte Saint André<br />\
    <img src="styles/legend/fusiontotalit_1_35.png" /> LEGTA \'le Robillard\'<br />\
    <img src="styles/legend/fusiontotalit_1_36.png" /> LEGTA Metz Courcelles Chaussy<br />\
    <img src="styles/legend/fusiontotalit_1_37.png" /> LEGTA Obernai<br />\
    <img src="styles/legend/fusiontotalit_1_38.png" /> LEGTA Poitiers Venours<br />\
    <img src="styles/legend/fusiontotalit_1_39.png" /> LEGTA Toulouse<br />\
    <img src="styles/legend/fusiontotalit_1_40.png" /> LEGTA Yvetot<br />\
    <img src="styles/legend/fusiontotalit_1_41.png" /> LEGTPA d\'Auxerre<br />\
    <img src="styles/legend/fusiontotalit_1_42.png" /> Lycée de Pouillé des Ponts de Cé<br />\
    <img src="styles/legend/fusiontotalit_1_43.png" /> MFREO de Campagne Les Boulonnais<br />\
    <img src="styles/legend/fusiontotalit_1_44.png" /> MFREO de Coqueréaumont<br />\
    <img src="styles/legend/fusiontotalit_1_45.png" /> MFREO du Haut Vaucluse<br />\
    <img src="styles/legend/fusiontotalit_1_46.png" /> Site d\'Arras du CFPPA du Pas de Calais<br />\
    <img src="styles/legend/fusiontotalit_1_47.png" /> Site d\'Arras du LEGTA du Pas de Calais<br />\
    <img src="styles/legend/fusiontotalit_1_48.png" /> Site d\'Auch du LEGTA Auch Beaulieu Lavacant<br />\
    <img src="styles/legend/fusiontotalit_1_49.png" /> Site de Castelnaudary de l\'Institut Saint Joseph<br />\
    <img src="styles/legend/fusiontotalit_1_50.png" /> Site de Moissac du CFPPA du Tarn et Garonne<br />\
    <img src="styles/legend/fusiontotalit_1_51.png" /> Site de Nermont du LEAP de Nermont<br />\
    <img src="styles/legend/fusiontotalit_1_52.png" /> Site Montardon du CFPPA des Pyrénées Atlantiques<br />\
    <img src="styles/legend/fusiontotalit_1_53.png" /> Site Yvetot du CFPPA de Seine Maritime agricole<br />\
    <img src="styles/legend/fusiontotalit_1_54.png" /> <br />'
        });

lyr_dep_france_0.setVisible(true);lyr_fusiontotalit_1.setVisible(true);
var layersList = [lyr_dep_france_0,lyr_fusiontotalit_1];
lyr_dep_france_0.set('fieldAliases', {'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', });
lyr_fusiontotalit_1.set('fieldAliases', {'uai': 'uai', 'nom': 'nom', 'region': 'region', 'departemen': 'departemen', 'adresse': 'adresse', 'adresse1': 'adresse1', 'adresse2': 'adresse2', 'adresse3': 'adresse3', 'code_posta': 'code_posta', 'commune': 'commune', 'telephone': 'telephone', 'email': 'email', 'site_web': 'site_web', 'uai_rne': 'uai_rne', 'code_dger': 'code_dger', 'precision_': 'precision_', 'UAI_ETBLT': 'UAI_ETBLT', 'layer': 'layer', 'path': 'path', 'Session': 'Session', 'LabelUAI': 'LabelUAI', 'CodeUaiD': 'CodeUaiD', 'Examen': 'Examen', 'CodeDger': 'CodeDger', 'Filiere': 'Filiere', 'CCF': 'CCF', 'NbClasse': 'NbClasse', 'NbIns': 'NbIns', 'TYPETABLT': 'TYPETABLT', 'x': 'x', 'y': 'y', 'TYPETABLTB': 'TYPETABLTB', 'CNEAP': 'CNEAP', 'UNREP': 'UNREP', 'MFR': 'MFR', 'TYPEETABIS': 'TYPEETABIS', 'NOM2': 'NOM2', 'LEGTA/GTPA': 'LEGTA/GTPA', 'LPA': 'LPA', 'CFA': 'CFA', 'EREA': 'EREA', 'CFPPA': 'CFPPA', 'LPM': 'LPM', 'ADAPSA': 'ADAPSA', 'LPP': 'LPP', 'auxiliary_': 'auxiliary_', 'typ': 'typ', 'TYPE': 'TYPE', 'numb': 'numb', 'x1': 'x1', 'y1': 'y1', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', });
lyr_dep_france_0.set('fieldImages', {'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', });
lyr_fusiontotalit_1.set('fieldImages', {'uai': 'TextEdit', 'nom': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'adresse': 'TextEdit', 'adresse1': 'TextEdit', 'adresse2': 'TextEdit', 'adresse3': 'TextEdit', 'code_posta': 'TextEdit', 'commune': 'TextEdit', 'telephone': 'TextEdit', 'email': 'TextEdit', 'site_web': 'TextEdit', 'uai_rne': 'TextEdit', 'code_dger': 'TextEdit', 'precision_': 'TextEdit', 'UAI_ETBLT': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Session': 'TextEdit', 'LabelUAI': 'TextEdit', 'CodeUaiD': 'TextEdit', 'Examen': 'TextEdit', 'CodeDger': 'TextEdit', 'Filiere': 'TextEdit', 'CCF': 'TextEdit', 'NbClasse': 'TextEdit', 'NbIns': 'TextEdit', 'TYPETABLT': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'TYPETABLTB': 'TextEdit', 'CNEAP': 'TextEdit', 'UNREP': 'TextEdit', 'MFR': 'TextEdit', 'TYPEETABIS': 'TextEdit', 'NOM2': 'TextEdit', 'LEGTA/GTPA': 'TextEdit', 'LPA': 'TextEdit', 'CFA': 'TextEdit', 'EREA': 'TextEdit', 'CFPPA': 'TextEdit', 'LPM': 'TextEdit', 'ADAPSA': 'TextEdit', 'LPP': 'TextEdit', 'auxiliary_': 'TextEdit', 'typ': 'TextEdit', 'TYPE': 'TextEdit', 'numb': 'TextEdit', 'x1': 'TextEdit', 'y1': 'TextEdit', 'auxiliar_1': 'TextEdit', 'auxiliar_2': 'TextEdit', });
lyr_dep_france_0.set('fieldLabels', {'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', });
lyr_fusiontotalit_1.set('fieldLabels', {'uai': 'no label', 'nom': 'no label', 'region': 'no label', 'departemen': 'no label', 'adresse': 'no label', 'adresse1': 'no label', 'adresse2': 'no label', 'adresse3': 'no label', 'code_posta': 'no label', 'commune': 'no label', 'telephone': 'no label', 'email': 'no label', 'site_web': 'no label', 'uai_rne': 'no label', 'code_dger': 'no label', 'precision_': 'no label', 'UAI_ETBLT': 'no label', 'layer': 'no label', 'path': 'no label', 'Session': 'no label', 'LabelUAI': 'no label', 'CodeUaiD': 'no label', 'Examen': 'no label', 'CodeDger': 'no label', 'Filiere': 'no label', 'CCF': 'no label', 'NbClasse': 'no label', 'NbIns': 'no label', 'TYPETABLT': 'no label', 'x': 'no label', 'y': 'no label', 'TYPETABLTB': 'no label', 'CNEAP': 'no label', 'UNREP': 'no label', 'MFR': 'no label', 'TYPEETABIS': 'no label', 'NOM2': 'no label', 'LEGTA/GTPA': 'no label', 'LPA': 'no label', 'CFA': 'no label', 'EREA': 'no label', 'CFPPA': 'no label', 'LPM': 'no label', 'ADAPSA': 'no label', 'LPP': 'no label', 'auxiliary_': 'no label', 'typ': 'no label', 'TYPE': 'no label', 'numb': 'no label', 'x1': 'no label', 'y1': 'no label', 'auxiliar_1': 'no label', 'auxiliar_2': 'no label', });
lyr_fusiontotalit_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});