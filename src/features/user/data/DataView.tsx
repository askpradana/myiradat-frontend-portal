import { Card, Descriptions } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/id";
import { useDataViewModel } from "./DataViewModel";
import { Consults } from "./DataModel";

const DataView = () => {
  const { data } = useDataViewModel();

  const renderConsults = (consults: Consults) => (
    <Descriptions
      bordered
      size="small"
      column={1}
      labelStyle={{
        fontWeight: "bold",
        textTransform: "capitalize",
        width: 200,
      }}
    >
      <Descriptions.Item label="Tanggal Konsultasi" className="bg-green-100">
        {consults.consultDate
          ? dayjs(consults.consultDate).format("DD MMMM YYYY")
          : "Belum ada"}
      </Descriptions.Item>

      <Descriptions.Item label="Analisis Terakhir" className="bg-green-100">
        {consults.latestAnalysisResult?.trim() || "Tidak tersedia"}
      </Descriptions.Item>

      <Descriptions.Item label="Komentar">
        {typeof consults.latestComments === "string" &&
        consults.latestComments.trim()
          ? consults.latestComments.trim()
          : "Komentar kosong"}
      </Descriptions.Item>
    </Descriptions>
  );

  const renderResultDescription = (
    result: { [key: string]: string },
    testDate: string | null
  ) => (
    <Descriptions
      bordered
      size="small"
      layout="horizontal"
      column={1}
      className="custom-description"
      labelStyle={{
        fontWeight: "bold",
        textTransform: "capitalize",
        width: 200,
      }}
    >
      <Descriptions.Item label="Tanggal Tes" className="bg-green-100">
        {dayjs(testDate).format("DD MMMM YYYY")}
      </Descriptions.Item>

      {Object.entries(result).map(([key, value]) => (
        <Descriptions.Item
          key={key}
          label={key
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        >
          {value || "Belum ada hasil"}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );

  return (
    <>
      {/* Consults */}
      <Card title="IMPROVE CARE" className="shadow-md m-4">
        {data?.consults && renderConsults(data.consults)}
      </Card>

      {/* IPro */}
      <Card title="IPRO" className="shadow-md" style={{ marginTop: "24px" }}>
        {data?.tests.ipro &&
          renderResultDescription(
            data.tests.ipro.result as unknown as Record<string, string>,
            data.tests.ipro.testTakenDate
          )}
      </Card>

      {/* IProb */}
      <Card title="IPROB" className="shadow-md" style={{ marginTop: "24px" }}>
        {data?.tests.iprob &&
          renderResultDescription(
            data.tests.iprob.result,
            data.tests.iprob.testTakenDate
          )}
      </Card>

      {/* IPros */}
      <Card title="IPROS" className="shadow-md" style={{ marginTop: "24px" }}>
        {data?.tests.ipros &&
          renderResultDescription(
            data.tests.ipros.result as unknown as Record<string, string>,
            data.tests.ipros.testTakenDate
          )}
      </Card>
    </>
  );
};

export default DataView;
