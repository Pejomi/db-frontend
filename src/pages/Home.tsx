import { Flex, Typography } from 'antd';
import Title from "antd/es/typography/Title";
const { Text } = Typography;

const Home = () => {
    return (
        <>
            <Flex gap="middle" align="start" vertical>
                <Flex style={{ width: "100%" }} justify={'center'} align={'flex-start'}>
                    <div style={{ padding: "50px 125px 100px 125px", width: "100%", maxWidth: 1000 }}>
                        <Title>Study Points Assignment on Databases SOFT 2024</Title>
                        <Title level={2}>Objectives</Title>
                        <Text>The objective of this assignment is to enable practical experience in working on a real-life globally important problem, creating programming solution, where design, development, and implementation of a database is in focus. Additionally, the suggested project is intended as a platform for analysis and comparing various database types, their advantages and disadvantages, as well as for creating argumented recommendations about their usability and performance in different domain areas.
                        </Text>
                        <Text>You get one project assignment, but are expected to provide three solutions of it:
                        </Text>
                        <br />
                        <br />
                        <Text>
                            <ol type="1">
                                <li>SQL database solution with MSSQL</li>
                                <li>Document database solution with MongoDB</li>
                                <li>Graph database solution with Neo4j</li>
                            </ol>
                        </Text>

                        <Text>We provide <a href="https://cphbusiness.mrooms.net/pluginfile.php/1021087/mod_page/content/10/DBData.zip?time=1707997114296">five datasets</a> with original data about the human and environmental protection issues in multiple major cities around the world. The data is in CSV format, downloaded from the CDP Cities, States and Regions Open Data Portal: <a href="https://data.cdp.net/">https://data.cdp.net/</a>
                        </Text>
                        <br />
                        <br />
                        <Text>It is recommended to extend the data with other public sources, which contribute to creating better picture of the domain area, such as statistics, media publications, glossary of the used terms, etc.
                        </Text>
                        <br />
                        <br />
                        <Text>It is expected of you to use all 5 Datasets in your new database.
                        </Text>

                        <Title level={2}>Tasks</Title>
                        <Text>Your tasks are following:</Text>
                        <br />
                        <br />
                        <Text>
                            <ol type="1">
                                <li>Explore the data and formulate considerations about a hosting database.</li>
                                <li>Design and develop proper database structure of the requested type.</li>
                                <li>Ingest the data into the database, include pre-processing of it, if necessary.</li>
                                <li>Design and develop operations for maintenance of the database.</li>
                                <li>Formulate ten relevant questions for extracting information from the database, design and develop database functionality for implementing the information extraction (for the relevance consult the instructor).</li>
                                <li>Design and implement a model for scaling the database, considering ACID and/or CAP theorem rules.</li>
                                <li>Validate and test all database operations.</li>
                                <li>Evaluate the database’s performance and suggest measures for improving it.</li>
                                <li>Document your work, describing the product and the process. Apply graphical notation (diagrams), when it is possible.</li>
                                <li>Formulate conclusions and recommendations.</li>
                            </ol>
                        </Text>

                        <Title level={2}>Notes</Title>
                        <Text>This is a group assignment. The optimal size of the groups is 2-3 students.
                        </Text>
                        <br />
                        <br />
                        <Text>Solutions bring study points, as follows: SQL DB – 30; Document DB – 20; Graph DB – 30.
                        </Text>
                        <br />
                        <br />
                        <Text>Submission deadlines and locations will be announced additionally by the instructor.
                        </Text>
                    </div >

                </Flex>
            </Flex>
        </>
    )
}

export default Home;