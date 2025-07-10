import { Card, Row, Col, Statistic, List } from "antd";

const UserTestCards = () => {
  const data = {
    profile: {
      email: "user@example.com",
      no_hp: "+6281234567890",
      nama: "Putra Iradat",
    },
    consults: {
      consult_date: "2025-07-09",
      latest_analysis_result: "2025-07-08",
      latest_comments: [
        { id: 0, comment: "" },
        { id: 0, comment: "" },
      ],
    },
    tests: {
      ipros: {
        test_taken_date: "2025-07-01",
        result: {
          hubugan_interpersonal: "Cukup Baik",
          kecepatan_perseptual: "Baik",
          kecerdasan_umun: "Sangat Baik",
          kemandirian: "Baik",
          ketangguhan: "Kurang",
          ketelitian_kerja: "Cukup",
          motivasi_berprestasi: "Tinggi",
          penalaran_non_verbal: "Baik",
          penalaran_numerik: "Baik",
          penalaran_verbal: "Sangat Baik",
          penyesuain_diri: "Baik",
          sistematika_kerja: "Cukup",
        },
      },
      iprob: {
        test_taken_date: "2025-07-01",
        result: {
          kecerdasan_umum: "Baik",
          daya_analisa_sintesa: "Cukup",
          daya_berpikir_abtrak: "Kurang",
          logika_berpikir: "Baik",
          kelincahan_pikir: "Baik",
          inisiatif: "Tinggi",
          perencanaan_dan_perorganisasian: "Cukup",
          sistematika_kerja: "Kurang",
          fleksibilitas: "Baik",
          daya_tahan_kerja_rutin: "Tinggi",
          daya_tahan_kerja_stress: "Sedang",
          stabilitas_emosi: "Baik",
          penyesuaian_diri: "Cukup",
          hubungan_interpersonal: "Kurang",
          kerjasama: "Baik",
          kepercayaan_diri: "Baik",
          kepemimpinan: "Sedang",
          pengambilan_keputusan: "Baik",
          motivasi_berprestasi: "Tinggi",
          komitmen_tugas: "Tinggi",
        },
      },
      ipro: {
        test_taken_date: "2025-07-01",
        result: {
          kecerdasan_umum: "Cukup",
          daya_analisa_sintesa: "Baik",
          daya_berpikir_abtrak: "Cukup",
          logika_berpikir: "Kurang",
          kelincahan_pikir: "Baik",
          inisiatif: "Sedang",
          perencanaan_dan_perorganisasian: "Kurang",
          sistematika_kerja: "Kurang",
          fleksibilitas: "Cukup",
          daya_tahan_kerja_rutin: "Baik",
          daya_tahan_kerja_stress: "Baik",
          stabilitas_emosi: "Baik",
          penyesuaian_diri: "Sedang",
          hubungan_interpersonal: "Cukup",
          kerjasama: "Kurang",
          kepercayaan_diri: "Tinggi",
          kepemimpinan: "Sedang",
          pengambilan_keputusan: "Cukup",
          motivasi_berprestasi: "Tinggi",
          komitmen_tugas: "Sedang",
        },
      },
    },
  };

const renderResultList = (result: Record<string, string>) => (
  <List
    itemLayout="horizontal"
    dataSource={Object.entries(result)}
    renderItem={([key, value]) => (
      <List.Item>
        <List.Item.Meta
          title={key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          description={value || "Belum ada hasil"}
        />
      </List.Item>
    )}
  />
);

  return (
    <>
      {/* Consults */}
      <Card title="Consults" className="shadow-md mb-6">
        <Row gutter={16}>
          <Col span={8}>
            <Statistic
              title="Tanggal Konsultasi"
              value={data.consults.consult_date}
            />
          </Col>
          <Col span={8}>
            <Statistic
              title="Analisis Terakhir"
              value={data.consults.latest_analysis_result}
            />
          </Col>
        </Row>
        <List
          itemLayout="horizontal"
          dataSource={data.consults.latest_comments}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                title={`Komentar ${index + 1}`}
                description={
                  item.comment?.trim() ? item.comment : "Komentar kosong"
                }
              />
            </List.Item>
          )}
        />
      </Card>

      {/* IPro */}
      <Card title="IPro" className="shadow-md" style={{ marginTop: "24px" }}>
        <p>
          <strong>Tanggal Tes:</strong> {data.tests.ipro.test_taken_date}
        </p>
        {renderResultList(data.tests.ipro.result)}
      </Card>

      {/* IProb */}
      <Card title="IProb" className="shadow-md" style={{ marginTop: "24px" }}>
        <p>
          <strong>Tanggal Tes:</strong> {data.tests.iprob.test_taken_date}
        </p>
        {renderResultList(data.tests.iprob.result)}
      </Card>

      {/* IPros */}
      <Card title="IPros" className="shadow-md" style={{ marginTop: "24px" }}>
        <p>
          <strong>Tanggal Tes:</strong> {data.tests.ipros.test_taken_date}
        </p>
        {renderResultList(data.tests.ipros.result)}
      </Card>
    </>
  );
};

export default UserTestCards;
