namespace TeduShop.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeTypeMoreImages : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Products", "MoreImages", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Products", "MoreImages", c => c.String(storeType: "xml"));
        }
    }
}
