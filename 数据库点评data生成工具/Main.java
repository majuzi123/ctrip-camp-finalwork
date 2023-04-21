import java.util.*;
public class Main {
    public static void main(String[] args) {
//        System.out.println(Math.random());
        String HEAD = "dataset0000";
        int NUM = 1000;
        for(int i=0;i<NUM;i++){
            System.out.println(commentDataCreator(HEAD+(NUM+i)));
        }
    }
    public static String commentDataCreator(String id){
        return "{\n" +
                "   \"_id\":\"" + id + "\",\n" +
                "   \"ImgList\":[\n" + randomImg() +
//                "     \"cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16818070489659700.jpg\"\n" +
                "   ],\n" +
                "   \"content\":\"" + randomComment() + "\",\n" +
                "   \"hotelId\":\"" + randomHotelId() + "\",\n" +
//                "   \"hotelName\":\"" + randomHotelName() + "\",\n" +
                "   \"liveTime\":" + randomTime() + ",\n" +
                "   \"location\":\"" + randomLocation() + "\",\n" +
                "   \"nickname\":\"匿名用户\",\n" +
                "   \"pass\":" + " true " + ",\n" +
                "   \"star\":" + randomScore() + ",\n" +
                "   \"userImg\":\"https://pic.imgdb.cn/item/64395c040d2dde5777264e41.jpg\",\n" +
                "   \"userInfo\":{\"appId\":\"wxec56979112c24ee2\",\"openId\":\"o-U_q5E-URdOoinwOteNyWPnEwjg\"}\n" +
                "}";
    }
    public static String randomImg(){
        String[] range = new String[]{
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16814888561969408.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16814888691449844.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16814900426888131.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16814900639765456.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/1681553663157871.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16815709514338652.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16815709526504100.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16815709532856169.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/1681570953846739.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16815709544089854.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16817297545905939.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16815709549598434.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16815709560091442.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16815711753327589.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16815711761795053.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16817297545905939.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16817873013905039.jpg",
                "cloud://cloud-3g1s9anved8781a2.636c-cloud-3g1s9anved8781a2-1317227423/comment-img/16818077332704249.jpg"
        };
        StringBuilder sb = new StringBuilder();
        int n =  (int)Math.round(Math.random()*18)-(18-9);// <0没有图
        if(n>=1){
            sb.append("\""+range[(int)Math.floor(Math.random()*range.length)]+"\"\n");
        }
        for(int i=1;i<n;i++){
            sb.append(",\""+range[(int)Math.floor(Math.random()*range.length)]+"\"\n");
        }
        return sb.toString();
    }
    public static String randomComment(){
        String[] range = new String[]{
                "服务非常周到。",
                "环境卫生很好！",
                "服务员态度很棒。",
                "酒店整体很有设计感。",
                "酒店特别干净整洁。",
                "装修非常华丽！",
                "前台非常热情。"
        };
        StringBuilder sb = new StringBuilder();
        int n =  (int)Math.round(Math.random()*8)+1;
        for(int i=0;i<n;i++){
            sb.append(range[(int)Math.floor(Math.random()*range.length)]);
        }
        return sb.toString();
    }
    public static String randomHotelId(){
        String[] range = new String[]{
                "00001","00002","00003","00004","00005","00006","00007","00008","00009","00010","00011","00012","00013","00014",
                "00001","00002","00003","00004","00005","00006","00007","00008","00009","00010","00011","00012","00013",
                "00001","00002","00003","00004","00005","00006","00007","00008","00009","00010","00011","00012",
                "00001","00002","00003","00004","00005","00006","00007","00008","00009","00010",
                "00001","00002","00003","00004","00005","00006","00007",
                "00001","00002","00003","00004","00005",
                "00001","00002","00003","00004","00005",
                "00001","00002","00003","00004",
                "00001","00002",
                "10001","10002","10003","10004","10005","10006","10007","10008","10009","10010"
        };
        return range[(int)Math.floor(Math.random()*range.length)];
    }
    public static String randomHotelName(){
        return "";
    }
    public static String randomTime(){
        long temp           =           1681871322923L;
        temp -= Math.round(Math.random()*100000000000L);
        return ""+temp;
    }
    public static String randomLocation(){
        String[] range = new String[]{
                "未知属地","上海市","江苏省 苏州市","北京市"
        };
        return range[(int)Math.floor(Math.random()*range.length)];
    }
    public static double randomScore(){
        return Math.floor(Math.random()*50)/10.0;
    }
}