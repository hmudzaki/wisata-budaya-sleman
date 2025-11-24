var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WilayahAdministrasiKecamatan_1 = new ol.format.GeoJSON();
var features_WilayahAdministrasiKecamatan_1 = format_WilayahAdministrasiKecamatan_1.readFeatures(json_WilayahAdministrasiKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahAdministrasiKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahAdministrasiKecamatan_1.addFeatures(features_WilayahAdministrasiKecamatan_1);
var lyr_WilayahAdministrasiKecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahAdministrasiKecamatan_1, 
                style: style_WilayahAdministrasiKecamatan_1,
                popuplayertitle: 'Wilayah Administrasi Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/WilayahAdministrasiKecamatan_1.png" /> Wilayah Administrasi Kecamatan'
            });
var format_KawasanCagarBudaya_2 = new ol.format.GeoJSON();
var features_KawasanCagarBudaya_2 = format_KawasanCagarBudaya_2.readFeatures(json_KawasanCagarBudaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanCagarBudaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanCagarBudaya_2.addFeatures(features_KawasanCagarBudaya_2);
var lyr_KawasanCagarBudaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanCagarBudaya_2, 
                style: style_KawasanCagarBudaya_2,
                popuplayertitle: 'Kawasan Cagar Budaya',
                interactive: true,
                title: '<img src="styles/legend/KawasanCagarBudaya_2.png" /> Kawasan Cagar Budaya'
            });
var format_BatasWilayahKecamatan_3 = new ol.format.GeoJSON();
var features_BatasWilayahKecamatan_3 = format_BatasWilayahKecamatan_3.readFeatures(json_BatasWilayahKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahKecamatan_3.addFeatures(features_BatasWilayahKecamatan_3);
var lyr_BatasWilayahKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahKecamatan_3, 
                style: style_BatasWilayahKecamatan_3,
                popuplayertitle: 'Batas Wilayah Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahKecamatan_3.png" /> Batas Wilayah Kecamatan'
            });
var format_JaringanJalan_4 = new ol.format.GeoJSON();
var features_JaringanJalan_4 = format_JaringanJalan_4.readFeatures(json_JaringanJalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_4.addFeatures(features_JaringanJalan_4);
var lyr_JaringanJalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_4, 
                style: style_JaringanJalan_4,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_4.png" /> Jaringan Jalan'
            });
var format_RuteTransJogja_5 = new ol.format.GeoJSON();
var features_RuteTransJogja_5 = format_RuteTransJogja_5.readFeatures(json_RuteTransJogja_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteTransJogja_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteTransJogja_5.addFeatures(features_RuteTransJogja_5);
var lyr_RuteTransJogja_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteTransJogja_5, 
                style: style_RuteTransJogja_5,
                popuplayertitle: 'Rute TransJogja',
                interactive: true,
                title: '<img src="styles/legend/RuteTransJogja_5.png" /> Rute TransJogja'
            });
var format_HalteTransJogja_6 = new ol.format.GeoJSON();
var features_HalteTransJogja_6 = format_HalteTransJogja_6.readFeatures(json_HalteTransJogja_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HalteTransJogja_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HalteTransJogja_6.addFeatures(features_HalteTransJogja_6);
var lyr_HalteTransJogja_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HalteTransJogja_6, 
                style: style_HalteTransJogja_6,
                popuplayertitle: 'Halte TransJogja',
                interactive: true,
                title: '<img src="styles/legend/HalteTransJogja_6.png" /> Halte TransJogja'
            });
var format_ObjekWisataCandi_7 = new ol.format.GeoJSON();
var features_ObjekWisataCandi_7 = format_ObjekWisataCandi_7.readFeatures(json_ObjekWisataCandi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObjekWisataCandi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObjekWisataCandi_7.addFeatures(features_ObjekWisataCandi_7);
var lyr_ObjekWisataCandi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObjekWisataCandi_7, 
                style: style_ObjekWisataCandi_7,
                popuplayertitle: 'Objek Wisata Candi',
                interactive: true,
                title: '<img src="styles/legend/ObjekWisataCandi_7.png" /> Objek Wisata Candi'
            });
var format_ObjekWisataMuseum_8 = new ol.format.GeoJSON();
var features_ObjekWisataMuseum_8 = format_ObjekWisataMuseum_8.readFeatures(json_ObjekWisataMuseum_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObjekWisataMuseum_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObjekWisataMuseum_8.addFeatures(features_ObjekWisataMuseum_8);
var lyr_ObjekWisataMuseum_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObjekWisataMuseum_8, 
                style: style_ObjekWisataMuseum_8,
                popuplayertitle: 'Objek Wisata Museum',
                interactive: true,
                title: '<img src="styles/legend/ObjekWisataMuseum_8.png" /> Objek Wisata Museum'
            });

lyr_OSMStandard_0.setVisible(true);lyr_WilayahAdministrasiKecamatan_1.setVisible(true);lyr_KawasanCagarBudaya_2.setVisible(true);lyr_BatasWilayahKecamatan_3.setVisible(true);lyr_JaringanJalan_4.setVisible(true);lyr_RuteTransJogja_5.setVisible(true);lyr_HalteTransJogja_6.setVisible(true);lyr_ObjekWisataCandi_7.setVisible(true);lyr_ObjekWisataMuseum_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WilayahAdministrasiKecamatan_1,lyr_KawasanCagarBudaya_2,lyr_BatasWilayahKecamatan_3,lyr_JaringanJalan_4,lyr_RuteTransJogja_5,lyr_HalteTransJogja_6,lyr_ObjekWisataCandi_7,lyr_ObjekWisataMuseum_8];
lyr_WilayahAdministrasiKecamatan_1.set('fieldAliases', {'qc_id': 'qc_id', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'kdbbps': 'kdbbps', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdpbps': 'kdpbps', 'kdpkab': 'kdpkab', 'kdppum': 'kdppum', 'luaswh': 'luaswh', 'tipadm': 'tipadm', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'wiadkc': 'wiadkc', 'wiadkk': 'wiadkk', 'wiadpr': 'wiadpr', 'wiadkd': 'wiadkd', 'uupp': 'uupp', 'luas': 'luas', 'jmlpnddk': 'jmlpnddk', 'ordo': 'ordo', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_KawasanCagarBudaya_2.set('fieldAliases', {'fcode': 'fcode', 'metadata': 'metadata', 'namobj': 'namobj', 'remark': 'remark', 'srs_id': 'srs_id', 'shape_leng': 'shape_leng', 'id': 'id', 'kcb': 'kcb', 'ket': 'ket', 'shape_Le_1': 'shape_Le_1', 'shape_Area': 'shape_Area', });
lyr_BatasWilayahKecamatan_3.set('fieldAliases', {'qc_id': 'qc_id', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'kdbbps': 'kdbbps', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdpbps': 'kdpbps', 'kdpkab': 'kdpkab', 'kdppum': 'kdppum', 'luaswh': 'luaswh', 'tipadm': 'tipadm', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'wiadkc': 'wiadkc', 'wiadkk': 'wiadkk', 'wiadpr': 'wiadpr', 'wiadkd': 'wiadkd', 'uupp': 'uupp', 'luas': 'luas', 'jmlpnddk': 'jmlpnddk', 'ordo': 'ordo', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_JaringanJalan_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Shape_Leng': 'Shape_Leng', 'JENIS': 'JENIS', 'FUNGSI': 'FUNGSI', 'NAMOBJ': 'NAMOBJ', 'SUMBER': 'SUMBER', 'Shape_Le_1': 'Shape_Le_1', });
lyr_RuteTransJogja_5.set('fieldAliases', {'fcode': 'fcode', 'metadata': 'metadata', 'namobj': 'namobj', 'remark': 'remark', 'srs_id': 'srs_id', 'nama': 'nama', 'rute': 'rute', 'st_length_': 'st_length_', 'Shape_Leng': 'Shape_Leng', });
lyr_HalteTransJogja_6.set('fieldAliases', {'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'nama': 'nama', 'keterangan': 'keterangan', });
lyr_ObjekWisataCandi_7.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'folderpath': 'folderpath', 'symbolid': 'symbolid', 'altmode': 'altmode', 'base': 'base', 'snippet': 'snippet', 'popupinfo': 'popupinfo', 'haslabel': 'haslabel', 'labelid': 'labelid', 'laman foto': 'laman foto', });
lyr_ObjekWisataMuseum_8.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'folderpath': 'folderpath', 'symbolid': 'symbolid', 'altmode': 'altmode', 'base': 'base', 'snippet': 'snippet', 'popupinfo': 'popupinfo', 'haslabel': 'haslabel', 'labelid': 'labelid', });
lyr_WilayahAdministrasiKecamatan_1.set('fieldImages', {'qc_id': 'TextEdit', 'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'kdbbps': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdebps': 'TextEdit', 'kdepum': 'TextEdit', 'kdpbps': 'TextEdit', 'kdpkab': 'TextEdit', 'kdppum': 'TextEdit', 'luaswh': 'TextEdit', 'tipadm': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadkc': 'TextEdit', 'wiadkk': 'TextEdit', 'wiadpr': 'TextEdit', 'wiadkd': 'TextEdit', 'uupp': 'TextEdit', 'luas': 'TextEdit', 'jmlpnddk': 'TextEdit', 'ordo': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_KawasanCagarBudaya_2.set('fieldImages', {'fcode': '', 'metadata': '', 'namobj': '', 'remark': '', 'srs_id': '', 'shape_leng': '', 'id': '', 'kcb': '', 'ket': '', 'shape_Le_1': '', 'shape_Area': '', });
lyr_BatasWilayahKecamatan_3.set('fieldImages', {'qc_id': '', 'namobj': '', 'fcode': '', 'remark': '', 'metadata': '', 'srs_id': '', 'kdbbps': '', 'kdcbps': '', 'kdcpum': '', 'kdebps': '', 'kdepum': '', 'kdpbps': '', 'kdpkab': '', 'kdppum': '', 'luaswh': '', 'tipadm': '', 'wadmkc': '', 'wadmkd': '', 'wadmkk': '', 'wadmpr': '', 'wiadkc': '', 'wiadkk': '', 'wiadpr': '', 'wiadkd': '', 'uupp': '', 'luas': 'TextEdit', 'jmlpnddk': 'TextEdit', 'ordo': '', 'shape_leng': '', 'shape_area': '', });
lyr_JaringanJalan_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'JENIS': 'TextEdit', 'FUNGSI': 'TextEdit', 'NAMOBJ': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_RuteTransJogja_5.set('fieldImages', {'fcode': 'TextEdit', 'metadata': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'srs_id': 'TextEdit', 'nama': 'TextEdit', 'rute': 'TextEdit', 'st_length_': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_HalteTransJogja_6.set('fieldImages', {'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'nama': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_ObjekWisataCandi_7.set('fieldImages', {'qc_id': 'TextEdit', 'name': 'TextEdit', 'folderpath': 'TextEdit', 'symbolid': 'TextEdit', 'altmode': 'Range', 'base': 'TextEdit', 'snippet': 'TextEdit', 'popupinfo': 'TextEdit', 'haslabel': 'Range', 'labelid': 'TextEdit', 'laman foto': 'TextEdit', });
lyr_ObjekWisataMuseum_8.set('fieldImages', {'qc_id': 'TextEdit', 'name': 'TextEdit', 'folderpath': 'TextEdit', 'symbolid': 'TextEdit', 'altmode': 'Range', 'base': 'TextEdit', 'snippet': 'TextEdit', 'popupinfo': 'TextEdit', 'haslabel': 'Range', 'labelid': 'TextEdit', });
lyr_WilayahAdministrasiKecamatan_1.set('fieldLabels', {'qc_id': 'inline label - visible with data', 'namobj': 'inline label - visible with data', 'fcode': 'inline label - visible with data', 'remark': 'inline label - visible with data', 'metadata': 'inline label - visible with data', 'srs_id': 'inline label - visible with data', 'kdbbps': 'inline label - visible with data', 'kdcbps': 'inline label - visible with data', 'kdcpum': 'inline label - visible with data', 'kdebps': 'inline label - visible with data', 'kdepum': 'inline label - visible with data', 'kdpbps': 'inline label - visible with data', 'kdpkab': 'inline label - visible with data', 'kdppum': 'inline label - visible with data', 'luaswh': 'inline label - visible with data', 'tipadm': 'inline label - visible with data', 'wadmkc': 'inline label - visible with data', 'wadmkd': 'inline label - visible with data', 'wadmkk': 'inline label - visible with data', 'wadmpr': 'inline label - visible with data', 'wiadkc': 'inline label - visible with data', 'wiadkk': 'inline label - visible with data', 'wiadpr': 'inline label - visible with data', 'wiadkd': 'inline label - visible with data', 'uupp': 'inline label - visible with data', 'luas': 'inline label - visible with data', 'jmlpnddk': 'inline label - visible with data', 'ordo': 'inline label - visible with data', 'shape_leng': 'inline label - visible with data', 'shape_area': 'inline label - visible with data', });
lyr_KawasanCagarBudaya_2.set('fieldLabels', {'fcode': 'inline label - visible with data', 'metadata': 'inline label - visible with data', 'namobj': 'inline label - visible with data', 'remark': 'inline label - visible with data', 'srs_id': 'inline label - visible with data', 'shape_leng': 'inline label - visible with data', 'id': 'inline label - visible with data', 'kcb': 'inline label - visible with data', 'ket': 'inline label - visible with data', 'shape_Le_1': 'header label - visible with data', 'shape_Area': 'inline label - visible with data', });
lyr_BatasWilayahKecamatan_3.set('fieldLabels', {'qc_id': 'inline label - visible with data', 'namobj': 'inline label - visible with data', 'fcode': 'inline label - visible with data', 'remark': 'inline label - visible with data', 'metadata': 'inline label - visible with data', 'srs_id': 'inline label - visible with data', 'kdbbps': 'inline label - visible with data', 'kdcbps': 'inline label - visible with data', 'kdcpum': 'inline label - visible with data', 'kdebps': 'inline label - visible with data', 'kdepum': 'inline label - visible with data', 'kdpbps': 'inline label - visible with data', 'kdpkab': 'inline label - visible with data', 'kdppum': 'inline label - visible with data', 'luaswh': 'inline label - visible with data', 'tipadm': 'header label - visible with data', 'wadmkc': 'inline label - visible with data', 'wadmkd': 'inline label - visible with data', 'wadmkk': 'inline label - visible with data', 'wadmpr': 'inline label - visible with data', 'wiadkc': 'inline label - visible with data', 'wiadkk': 'inline label - visible with data', 'wiadpr': 'inline label - visible with data', 'wiadkd': 'inline label - visible with data', 'uupp': 'inline label - visible with data', 'luas': 'inline label - visible with data', 'jmlpnddk': 'inline label - visible with data', 'ordo': 'inline label - visible with data', 'shape_leng': 'inline label - visible with data', 'shape_area': 'inline label - visible with data', });
lyr_JaringanJalan_4.set('fieldLabels', {'OBJECTID_1': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'JENIS': 'inline label - visible with data', 'FUNGSI': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', });
lyr_RuteTransJogja_5.set('fieldLabels', {'fcode': 'inline label - visible with data', 'metadata': 'inline label - visible with data', 'namobj': 'inline label - visible with data', 'remark': 'inline label - visible with data', 'srs_id': 'inline label - visible with data', 'nama': 'inline label - visible with data', 'rute': 'inline label - visible with data', 'st_length_': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_HalteTransJogja_6.set('fieldLabels', {'namobj': 'inline label - visible with data', 'fcode': 'inline label - visible with data', 'remark': 'inline label - visible with data', 'metadata': 'inline label - visible with data', 'srs_id': 'inline label - visible with data', 'nama': 'inline label - visible with data', 'keterangan': 'inline label - visible with data', });
lyr_ObjekWisataCandi_7.set('fieldLabels', {'qc_id': 'inline label - visible with data', 'name': 'header label - visible with data', 'folderpath': 'inline label - visible with data', 'symbolid': 'inline label - visible with data', 'altmode': 'inline label - visible with data', 'base': 'inline label - visible with data', 'snippet': 'inline label - visible with data', 'popupinfo': 'inline label - visible with data', 'haslabel': 'inline label - visible with data', 'labelid': 'inline label - visible with data', 'laman foto': 'inline label - visible with data', });
lyr_ObjekWisataMuseum_8.set('fieldLabels', {'qc_id': 'inline label - visible with data', 'name': 'inline label - visible with data', 'folderpath': 'inline label - visible with data', 'symbolid': 'inline label - visible with data', 'altmode': 'inline label - visible with data', 'base': 'inline label - visible with data', 'snippet': 'inline label - visible with data', 'popupinfo': 'inline label - visible with data', 'haslabel': 'inline label - visible with data', 'labelid': 'inline label - visible with data', });
lyr_ObjekWisataMuseum_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});